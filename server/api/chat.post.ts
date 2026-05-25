import Anthropic from '@anthropic-ai/sdk'

// In-memory rate limit store: IP → { count, resetAt }
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT = 15        // requests per window
const RATE_WINDOW = 3600000  // 1 hour in ms
const MAX_TOKENS = 500
const MAX_HISTORY = 10       // keep last N messages to avoid token overflow

const SYSTEM_PROMPT = `You are an AI assistant embedded in Tanadon Inmano's personal portfolio website.
Answer questions about Tanadon in a friendly, professional manner.
Keep answers concise (2–4 sentences) unless the user asks for more detail.
Always reply in the same language the user writes in — Thai or English.
If asked something unrelated to Tanadon or this portfolio, politely redirect the conversation.

=== PERSONAL INFO ===
Full name: Tanadon Inmano (ธนดล อิ่นมะโน)
Role: Full Stack Developer · AI/ML Enthusiast
Location: Chiang Mai, Thailand
Email: framnaver@gmail.com
GitHub: github.com/FramNaVer

=== EXPERIENCE ===
- Software Developer @ Muang Thai Capital (MTC) — May 2026 to present (current full-time job)
- Software Developer Intern @ Pransworks — Apr 20 to Jun 30, 2026 (72 days internship)
- B.Sc. Computer Science @ Maejo University — 2021–2025 (graduated 2025)

=== SKILLS ===
Programming Languages: Vue.js, Nuxt.js, Python, C#, ASP.NET, Golang, JavaScript, TypeScript, HTML, CSS, Express.js, React, Tailwind CSS
Tools & Stack: Docker, Git, GitHub, Postman, VS Code, Visual Studio, Figma, MySQL, MongoDB, Swagger, Trello

=== CAPABILITIES ===
Web Development, REST API Design, Machine Learning, Database Design, UI/UX with Figma, Docker & DevOps

=== PERSONALITY ===
Passionate about building scalable web applications and exploring AI/ML.
Currently working full-time at Muang Thai Capital (MTC) as a Software Developer.
Open to collaboration and interesting projects.`

export default defineEventHandler(async (event) => {
  // ── Rate limiting ──
  const ip = getRequestHeader(event, 'x-forwarded-for')?.split(',')[0].trim()
    ?? getRequestIP(event)
    ?? 'unknown'

  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (entry) {
    if (now >= entry.resetAt) {
      rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    } else if (entry.count >= RATE_LIMIT) {
      throw createError({
        statusCode: 429,
        message: 'Rate limit exceeded. Please try again later.'
      })
    } else {
      entry.count++
    }
  } else {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
  }

  // ── Parse body ──
  const body = await readBody(event)
  const messages: { role: 'user' | 'assistant'; content: string }[] = body?.messages ?? []

  if (!messages.length) {
    throw createError({ statusCode: 400, message: 'No messages provided.' })
  }

  // Keep only last N messages to control token usage
  const trimmed = messages.slice(-MAX_HISTORY)

  // ── Call Claude Haiku ──
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: MAX_TOKENS,
    system: SYSTEM_PROMPT,
    messages: trimmed
  })

  return {
    content: (response.content[0] as Anthropic.TextBlock).text
  }
})

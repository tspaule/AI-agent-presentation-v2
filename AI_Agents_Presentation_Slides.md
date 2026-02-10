# AI Agent Session — Mander Beer & Learn

**Thomas Paule | AI from the Inside | February 2026**

---

## Slide 1: Title

**AI Agent Session**
Mander Beer & Learn

Thomas Paule | AI from the Inside
February 2026

> **Speaker Notes:** Welcome everyone, grab a drink. Quick intro — 'Thanks for filling out the survey, it really shaped tonight.' This is a casual beer & learn, not a board meeting. Tonight we're demystifying AI agents — what they are, how they work, and what they can do today.

---

## Slide 2: Why Are We Here?

AI has moved from chatbots to agents. Most people know ChatGPT — fewer know what's actually possible now.

| # | Section | Description |
|---|---------|-------------|
| 01 | Survey Playback | What you told us you wanted |
| 02 | WTF is an AI Agent? | The building blocks explained |
| 03 | Agents Doing Real Work | Live demos with real tools |
| 04 | Questions & Discussion | Your questions answered |

> **Speaker Notes:** Quick run through the sections: 'We'll start with your feedback, get into some theory, then spend most of our time on practical demos. Plenty of time for questions at the end.'

---

## Slide 3: Rules of Engagement

- Questions are encouraged — raise your hand so we don't descend into chaos
- No heckling the presenter (save that for the pub after)
- There are no dumb questions — only dumb answers, and that's my problem
- Phones on silent, but feel free to screenshot slides

> **Speaker Notes:** Keep it light: 'Look, this is beer & learn, not a board meeting. If everyone yells at once it'll be chaos — raise a hand and I'll get to you. If you're wondering something, someone else is too.'

---

## Slide 4: Section Divider — We Asked, You Answered

**We Asked, You Answered**
12 of you shared your thoughts — here's what we learned

> **Speaker Notes:** 'Before I built this presentation, I wanted to know what YOU actually care about. 12 of you filled out the survey — thank you. Let me show you what I learned.'

---

## Slide 5: Your Experience with AI

We've got a good mix in the room — content will work for both groups

| Segment | % | Description |
|---------|---|-------------|
| Daily Users | 42% | AI is integral to their workflow |
| Occasional Users | 58% | Still exploring what's possible |
| Complete Beginners | 0% | Everyone here has started the journey |

> **Speaker Notes:** 'We've got a good mix — some of you use AI every day, others are still exploring. I'll make sure tonight works for both groups. Zero complete beginners — everyone here has started.'

---

## Slide 6: Your Top Concerns

We heard you — we'll address all of these tonight

| Concern | % of Respondents |
|---------|-----------------|
| Data Privacy & Security | 58% |
| Accuracy (Hallucinations) | 50% |
| Not knowing where to start | 50% |
| Cost / Subscriptions | 33% |

> **Speaker Notes:** 'This is where it gets interesting. Your #1 concern? Privacy and security — 58%. I'm going to address this head-on. Half of you worry about hallucinations — valid. And half just don't know where to start — too many tools, too confusing. We'll tackle all of these.'

---

## Slide 7: Tasks That Should Be Easier

| Pain Point | Detail |
|------------|--------|
| Email Management | #1 pain point — 4 mentions |
| Data Reporting | Hours spent on weekly insights |
| Context Loading | "Copying and pasting into GPT" |
| Client Monitoring | Periodic touchpoints & follow-ups |

> *"I want to come to work on Thursday and a report is sitting there for me with all data analysed and ready for me to review and publish."* — Survey Respondent

> **Speaker Notes:** 'I asked what tasks feel tedious. Email management — by far #1. Data reporting — hours every week. The context loading problem — copying and pasting into GPT. Pause on this quote: someone said they want to come to work and the report is just sitting there. That's EXACTLY what agents can do.'

---

## Slide 8: What You Want From Tonight

Your words, not ours — let's answer these:

- "Is there a genuine AI agent I should be using today?"
- "Practical steps to set up a usable AI stack"
- "How to build an agent in a secure environment"
- "Best tools and best way to use these tools"

> **Speaker Notes:** 'When I asked what you want to walk away with tonight, it wasn't explain the theory — it was tell me what to actually USE. Is there a genuine AI agent I should be using today? I'll answer that. How do I set this up securely? We'll cover that too.'

---

## Slide 9: Section Divider — WTF Are AI Agents?

**WTF Are AI Agents?**
The building blocks — from chatbots to autonomous agents

> **Speaker Notes:** 'Alright, quick bit of theory — I promise to keep it tight. We need a shared language before the demos. Everything comes down to building blocks.'

---

## Slide 10: The Seven Building Blocks

Master these seven, and you understand agents.

| # | Block | Role |
|---|-------|------|
| 1 | Model | The Brain |
| 2 | Instructions | Identity & Rules |
| 3 | Skills | Learned Capabilities |
| 4 | Tools | Actions It Can Take |
| 5 | Context | Task-Specific Info |
| 6 | Memory | Persistence |
| 7 | Orchestration | Planning & Sequencing |

> **Speaker Notes:** 'Every agent — from ChatGPT to a custom enterprise system — is built from these seven components. Walk through quickly: Model, Instructions, Skills, Tools, Context, Memory, Orchestration. Let's go through each one.'

---

## Slide 11: Model — The Brain

The underlying AI that reasons and generates.

**KEY INSIGHT:** Not every task needs the most powerful model — sometimes fast and cheap beats slow and brilliant.

| Model | Strength | Best For |
|-------|----------|----------|
| Claude Opus | Deep reasoning | Complex analysis, strategy |
| Claude Sonnet | Balanced | Most everyday tasks |
| Claude Haiku | Fast & cheap | Simple categorisation, lookups |

> **Speaker Notes:** 'First: the Model. This is the brain — the raw AI. Different models have different strengths. Key insight: not every task needs the most powerful model. Claude Opus for complex financial analysis vs Claude Haiku for simple categorisation. Match the model to the task.'

---

## Slide 12: Instructions — Identity & Rules

Who the agent is and how it behaves — persistent, not task-specific.

**EXAMPLE INSTRUCTIONS:**
> "You are a senior financial controller. Be precise and conservative. Always flag discrepancies over $500. Never auto-approve payments above $10,000. Communicate in plain English, not accounting jargon."

| Aspect | Question |
|--------|----------|
| Identity | Who is the agent? What role? |
| Boundaries | What is it NOT allowed to do? |
| Standards | What level of quality is expected? |

> **Speaker Notes:** 'Second: Instructions. This is WHO the agent IS. Persistent definitions — personality, standards, guardrails. Read the example. Without good instructions, you get a generic AI. With them, you get a specialist.'

---

## Slide 13: Skills — Learned Capabilities

*[Image: Matrix — "I know kung fu"]*

Learned capabilities — packaged expertise with knowledge, judgment, and process.

- Skills define what the agent knows how to do — not just what it can access
- Can be pre-built (download from skill databases) or custom-made
- Like uploading kung fu to Neo's brain — instant capability

**EXAMPLE:** Month-end reconciliation — the agent knows the steps, the sequence, what exceptions look like, and when to escalate. Not because it has a rule for every scenario, but because it has the expertise.

> **Speaker Notes:** 'Remember this scene? Neo gets kung fu uploaded directly into his brain. Skills are packaged expertise — not just what the agent can access, but what it KNOWS HOW to do. We can cover writing custom skills in the demo if people are interested.'

---

## Slide 14: Tools — Actions It Can Take

Tools are the verbs — each one does one thing.

This is what gives agents hands. Without tools, they can only think. With tools, they can act.

| Tool | Tool | Tool |
|------|------|------|
| Search the web | Query a database | Send an email |
| Read a bank feed | Create a document | Execute code |

> **Speaker Notes:** 'Tools are the verbs — discrete, single-purpose actions. Search the web. Query a database. Send an email. Important: Tools have NO judgment about when or why to use them. That's what Skills and Instructions are for.'

---

## Slide 15: Context — Task-Specific Information

What's on the desk right now — the data that makes work specific, not generic.

**YOUR PAIN POINT:** "Copying and pasting everything into GPT" — context fixes this.

Sources flow in automatically: Email, Calendar, Documents, CRM, Web → Agent (informed and specific, not generic)

> **Speaker Notes:** 'Context is what's on the desk right now. Remember that pain point — copying and pasting everything into GPT? Context fixes that — the agent gets the right information automatically. Email, calendar, documents, CRM — flowing in. This makes the work specific, not generic.'

---

## Slide 16: Memory — Persistence Across Interactions

Memory is what turns a tool into a partner. It's the difference between a stranger and a colleague.

**EXAMPLE:** Remembering that this client always miscodes contractor payments to 'office supplies' — so the agent proactively flags and reclassifies them without being told.

| Aspect | |
|--------|--|
| Continuity | Context changes every task |
| Personalisation | Memory persists across tasks |
| Learning | Together they create familiarity |

> **Speaker Notes:** 'Memory is what turns a tool into a partner. It's the difference between a stranger and a colleague. The agent remembers your preferences, learns from mistakes. It turns cold starts into continuations.'

---

## Slide 17: The Big Leap

**From Chatbots to Agents — you're no longer the glue**

| | BEFORE — Chatbots | NOW — Agents |
|--|-------------------|-------------|
| Flow | Question → Answer | Goal → Plan → Execute → Deliver |
| Role | Human is the glue between steps | Agent runs end-to-end |
| Process | Copy-paste between tools | Multi-step autonomous workflows |
| Control | You "jockey" the system | The system drives itself |
| Sessions | Each interaction is isolated | Continuous, connected execution |

> **Speaker Notes:** 'Here's the key insight. With a chatbot: Question, answer, question, answer — YOU are the glue. With an agent: You give it a GOAL. It plans, reasons, uses tools, completes. The human is no longer the middleware. This is the paradigm shift.'

---

## Slide 18: Section Divider — Agents Doing Real Work

**Agents Doing Real Work**
Live demos & practical examples

> **Speaker Notes:** 'Okay, theory done. Now let's see this in action. This is the fun part — three different demos showing how agents work in real life.'

---

## Slide 19: Why Claude?

*[Image: Distracted boyfriend meme — ChatGPT vs Claude]*

Claude and Claude Code have pulled ahead for agent-powered work.

- Better reasoning, especially for complex tasks
- Superior coding and tool-use capabilities
- Not a religious war — use what works

> *"I'm not anti-ChatGPT. But Claude has pulled ahead for how I work."*

**Tonight's demos:** Claude Code → Claude Cowork → JackalBot

> **Speaker Notes:** 'Look, I used ChatGPT for years. It's good. But Claude and Claude Code have pulled ahead — especially for coding and complex tasks. Show the meme, get a laugh. This is what we'll demo tonight.'

---

## Slide 20: Demo 1 — Claude Code

Chain of thought, planning, and autonomous execution.

| Step | Action | Detail |
|------|--------|--------|
| 1 | Write a Spec | Define intent in a document |
| 2 | Point the Agent | Agent reads and plans |
| 3 | Watch it Build | Code, test, iterate |

**26,000** lines of working code — written overnight while I slept.

> **Speaker Notes:** 'First demo: Claude Code. The workflow: create a spec in GitHub, point the agent at it, watch it plan and build. I ran this overnight on a project. Woke up to 26,000 lines of working code. Not perfect — had to refine. But 90% done while I slept. I didn't write the code — I wrote the intent.'

---

## Slide 21: Improvements Are Becoming Recursive

Software is building software — and that accelerates everything.

*[J-Curve graphic showing exponential AI capability growth]*

> *"This is moving faster than anything I've seen in my career."*

**We are here** — on the steep part of the curve, heading towards AGI.

> **Speaker Notes:** 'Here's what's mind-bending. Software is now building software. The tools that build AI are being improved BY AI. This is recursive improvement — it compounds. We're on the steep part of the curve right now. This is moving faster than anything I've seen in my career — towards AGI.'

---

## Slide 22: Demo 2 — Claude Cowork

An agent managing a complex creative task with local context.

**META MOMENT:** You're looking at the output of the very process being described.

| Step | Action | Detail |
|------|--------|--------|
| Context Folder | Load | Survey data, images, brand guidelines, structure |
| Clear Prompt | Write | Detailed instructions for what to build |
| Agent Executes | Run | Chain of thought, to-do list, builds slide by slide |
| Output | Deliver | Complete, branded presentation deck |

> **Speaker Notes:** 'This is meta — I'm showing you how this presentation was built. I set up a local folder with all context — survey data, images, brand guidelines. Clear prompt instructions. The agent planned it out, built everything. This presentation was built using the technique I'm about to show you. After this slide, we move into the live demo...'

---

## Slide 23: Meet JackalBot

*[Image: Tony Stark with JARVIS]*

**What if you had your own JARVIS?**
My Personal AI Agent

> **Speaker Notes:** 'Now for the fun one. Show the JARVIS image. What if you had your own JARVIS? Not science fiction — this is real and running right now. Meet JackalBot — my personal AI agent.'

---

## Slide 24: How JackalBot Works

**Architecture:**

| Component | Detail |
|-----------|--------|
| Framework | Built on OpenClaw (formerly ClawdBot) |
| Hosting | Cloud — Digital Ocean (not local machine) |
| Interface | Discord (voice, text, files) |
| LLM | Claude |

**Connected Tools:** Email, Calendar, Web, Files

**Key Design Decisions:**
- Cloud-hosted for security isolation — not on local machine
- Discord as the communication interface — voice, text, files
- Configured with custom skills and tool-calling capabilities

> **Speaker Notes:** 'JackalBot runs on ClawdBot/OpenClaw — an open source framework. It's cloud-hosted on Digital Ocean — NOT on my local machine. Why? Security — if something goes wrong, it's isolated. I talk to it through Discord — that's the interface for sending data back and forth.'

---

## Slide 25: JackalBot in Action

Live demo — voice note to email in real-time.

| Step | Action | Detail |
|------|--------|--------|
| 1 | Voice Note | Speak the task |
| 2 | Process | Transcribe & understand |
| 3 | Email | Compose & send |
| 4 | Done | Check your inbox |

> *"I spoke, it transcribed, it understood, it acted, it completed. No copy-paste. No switching apps. No human glue."*

**LIVE DEMO IN DISCORD**

> **Speaker Notes:** 'Let me show you. I'm going to send a voice note to the bot. Watch it transcribe, process, and then email everyone in the room. That just happened in real-time — no human glue required. After this slide, we do the live demo...'

---

## Slide 26: Power Comes With Risk

More data + more tool access = more risk if misconfigured.

**REAL ATTACK VECTOR:** Online skill databases have had people uploading malware disguised as skills. If your agent has email access, file system access, or elevated permissions, a malicious skill could:

- Send emails on your behalf
- Exfiltrate sensitive data
- Execute harmful code
- Access connected systems

> *"With great power comes great responsibility. Audit your skills, lock down permissions, understand what you're giving access to."*

> **Speaker Notes:** 'Let's talk about the elephant in the room. You give an agent access to your email, your files — what could go wrong? Real example: Skills databases with malware. If you install that and give elevated permissions... your agent could send emails on your behalf, access files, execute code. Security isn't optional. That's why I run mine in an isolated cloud environment and only install skills I've reviewed.'

---

## Slide 27: From Doers to Instructors

AI went from Talkers to Doers. We're going from Doers to Instructors.

| # | Skill | Description |
|---|-------|-------------|
| 01 | Clear Instruction | Giving clear and logical direction — increasingly by voice. The better you articulate, the better the output. |
| 02 | Novel Applications | Thinking of new ways to apply intelligence. What COULD this do that nobody has tried yet? |
| 03 | Agent Orchestration | Becoming a true manager of AI agents. Directing work, not doing work. |

**Your value shifts from execution to orchestration.**

> **Speaker Notes:** 'Before questions — what's the human role? AI moved from Talkers to Doers. We're moving from Doers to Instructors. Three skills that matter: Clear instruction, thinking of novel applications, and agent orchestration. Your value shifts from execution to orchestration.'

---

## Slide 28: Thank You

**Questions & Discussion**

Thomas Paule | AI from the Inside

> **Speaker Notes:** 'That's the formal part done. Plenty of time for questions. Anything you wanted to ask but felt was too basic — now's the time. There are no dumb questions.'

---

## Slide 29: Final Thought

> *"Today is the worst AI will ever be.*
> *It's only going to get better from here."*

Thomas Paule | AI from the Inside | February 2026

> **Speaker Notes:** 'I'll leave you with this. Today is the worst AI will ever be. It's only going to get better from here. The question isn't IF this changes your work — it's WHEN and HOW you adapt. Thanks for coming tonight.'

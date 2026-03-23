import Link from "next/link";

export const metadata = {
  title: "EMDR Trauma Therapy — Integral Heart Therapy",
  description:
    "EMDR therapy for trauma, PTSD, anxiety, and complex trauma. Understand the 8 phases and what to expect in a safe, bilingual setting.",
};

export default function EMDRTherapyPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/85 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif text-stone-800">
            Integral Heart{" "}
            <span className="text-stone-500 text-sm ml-2">整合心理</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/#services"
              className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#pricing"
              className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
              className="bg-stone-800 text-stone-50 px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-all duration-300"
              target="_blank"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#services"
            className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
          >
            ← Back to all services
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mt-6">
            EMDR therapy for trauma{" "}
            <em className="italic text-amber-700">recovery</em>
          </h1>
          <p className="text-stone-400 font-serif mt-3">
            EMDR 创伤治疗 · 眼动脱敏与再加工疗法
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mt-6 max-w-2xl">
            Traumatic experiences can get stuck. Not in a metaphorical sense —
            literally stuck in your nervous system, stored in a way that keeps
            triggering the same emotional responses long after the event is
            over. EMDR helps your brain finish processing what it couldn&apos;t
            process at the time.
          </p>
        </div>
      </section>

      {/* What is EMDR */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            What EMDR actually is
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              EMDR stands for Eye Movement Desensitisation and Reprocessing.
              It was developed in the late 1980s and has since become one of the
              most researched treatments for PTSD and trauma. It&apos;s
              recommended by the World Health Organisation, the Australian
              Psychological Society, and the American Psychiatric Association.
            </p>
            <p>
              The basic idea: when something overwhelming happens, your brain
              sometimes can&apos;t fully process it. The memory gets stored with
              all the original emotions, physical sensations, and beliefs
              attached — as if it&apos;s still happening now. A sound, a smell,
              a phrase can pull you right back into it.
            </p>
            <p>
              EMDR uses bilateral stimulation (usually eye movements, sometimes
              tapping or sounds) while you hold a traumatic memory in mind. This
              appears to help the brain&apos;s natural information processing
              system move the memory from &quot;active threat&quot; to
              &quot;something that happened in the past.&quot; The memory
              doesn&apos;t disappear. It just stops running your nervous system.
            </p>
          </div>
        </div>
      </section>

      {/* The 8 Phases */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">
            The 8 phases of EMDR
          </h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            EMDR follows a structured protocol. Here&apos;s what each phase
            involves and what it feels like from your side. We don&apos;t rush
            through these — some phases take a single session, others take
            several.
          </p>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    History and treatment planning
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    了解你的故事
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    We talk about what brought you here and what you want to
                    work on. I&apos;ll ask about your history — not to make you
                    relive everything in detail, but to understand which memories
                    are driving your current symptoms. Together we map out a
                    treatment plan. You stay in control of what we focus on and
                    when.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Preparation
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    建立安全感
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Before we go near any difficult material, I teach you
                    techniques for managing distress — grounding exercises,
                    breathing techniques, a &quot;safe place&quot; or
                    &quot;container&quot; visualisation you can use if things
                    feel too intense. Think of this as building a solid
                    foundation before doing renovation work. We don&apos;t move
                    forward until you feel genuinely ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Assessment
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    定位目标记忆
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    We identify the specific memory to work on and break it into
                    its components: the image that represents the worst part, the
                    negative belief you hold about yourself because of it
                    (something like &quot;I&apos;m not safe&quot; or &quot;It
                    was my fault&quot;), the positive belief you&apos;d prefer,
                    the emotions and physical sensations that come up, and how
                    distressing it feels right now on a scale of 0-10.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Desensitisation
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    核心处理阶段
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    This is the core processing phase. You hold the memory in
                    mind while following my fingers with your eyes (or using
                    tapping or audio tones — we find what works for you). You
                    don&apos;t need to narrate what&apos;s happening. Your brain
                    does the work. Between sets of eye movements, I check in
                    with you briefly. People often notice the memory shifting —
                    new associations, different perspectives, emotions moving
                    through and releasing. The distress level gradually comes
                    down.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Installation
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    植入积极信念
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Once the distress has reduced, we strengthen the positive
                    belief you identified earlier. If the old belief was
                    &quot;I&apos;m powerless,&quot; the new one might be
                    &quot;I survived and I have choices now.&quot; We use more
                    bilateral stimulation to help this new belief connect deeply
                    to the memory. The goal is that when the old memory comes
                    up, it comes with the updated understanding rather than the
                    old pain.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Body scan
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    身体扫描
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Trauma lives in the body as much as the mind. After
                    processing, I ask you to think about the memory and scan
                    your body for any remaining tension, tightness, or
                    discomfort. If something shows up, we do more processing
                    until your body feels settled. This phase makes sure the
                    work is complete — not just cognitively, but physically.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 7 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  7
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Closure
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    安全结束
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Every session ends with you feeling stable, regardless of
                    where we are in the processing. If a memory isn&apos;t
                    fully processed by the end of a session, I use the
                    grounding and containment techniques from Phase 2 to make
                    sure you leave feeling safe and regulated. I&apos;ll also
                    talk you through what you might notice in the days after —
                    sometimes new thoughts, dreams, or emotions surface as your
                    brain continues processing between sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 8 */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                  8
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-1">
                    Re-evaluation
                  </h3>
                  <p className="text-sm text-stone-400 font-serif mb-3">
                    回顾与评估
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    At the start of the next session, we check in on how the
                    processed memory feels now. Has the distress stayed down?
                    Did anything new come up? Do we need to revisit it, or are
                    we ready to move to the next target? This ongoing evaluation
                    makes sure the changes are lasting and guides where we go
                    next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What EMDR can help with */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            What EMDR can help with
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              EMDR was originally developed for PTSD, but research has expanded
              its application well beyond that. I use EMDR with clients working
              through single-incident trauma (accidents, assaults, loss),
              complex trauma from childhood (neglect, emotional abuse, unstable
              environments), anxiety that feels disproportionate to the
              situation, phobias, grief, and the emotional weight that comes with
              chronic health conditions or neurodivergence.
            </p>
            <p>
              For clients with ADHD, EMDR can be particularly useful for
              processing the accumulated shame and rejection sensitivity that
              builds up over a lifetime of being told you&apos;re not trying
              hard enough.
            </p>
          </div>
        </div>
      </section>

      {/* Common questions */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">
            Common questions about EMDR
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I have to tell you everything that happened?",
                a: "No. EMDR is not talk therapy. You don't need to describe the trauma in detail for it to work. Your brain processes the memory internally — I guide the process, but you don't have to narrate it.",
              },
              {
                q: "Does it work over telehealth?",
                a: 'Yes. I use a specialised telehealth platform with a built-in "light bar" for bilateral stimulation. Research supports EMDR via telehealth as effective as in-person sessions. Many clients prefer the comfort of processing from their own space.',
              },
              {
                q: "How many sessions does it take?",
                a: "It depends on what we're working with. A single-incident trauma (like a car accident) might resolve in 3-6 sessions. Complex trauma or multiple targets usually takes longer — somewhere between 8 and 20 sessions. We reassess regularly.",
              },
              {
                q: "Will I feel worse before I feel better?",
                a: "Some people notice increased emotional awareness or vivid dreams in the days following a session, as the brain continues processing. This is normal and temporary. We always end each session with grounding and closure to make sure you leave feeling stable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-stone-200"
              >
                <h3 className="font-serif text-lg text-stone-800 mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-stone-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-4">
            Ready to start processing?
          </h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            A free 15-minute call lets us talk about what you&apos;re
            experiencing and whether EMDR is the right approach for your
            situation. No obligation.
          </p>
          <Link
            href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
            className="inline-flex items-center gap-2 bg-white text-stone-800 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300"
            target="_blank"
          >
            Book a free 15-minute call →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-500 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2026 Integral Heart Therapy — Yatong (Elias)
            <br />
            Registered Social Worker · AASW #488174 · ABN 95 466 335 342
          </div>
          <div>
            <Link
              href="mailto:elias@integralhearttherapy.com.au"
              className="text-stone-400 hover:text-amber-200 transition-colors"
            >
              elias@integralhearttherapy.com.au
            </Link>
            <span className="mx-2">·</span>
            Melbourne, Australia
          </div>
        </div>
      </footer>
    </main>
  );
}

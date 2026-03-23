import Link from "next/link";

export const metadata = {
  title: "ADHD Therapy & Coaching — Integral Heart Therapy",
  description:
    "Integrative therapy for adults with ADHD. Evidence-based approaches adapted for how the ADHD brain actually works — not how textbooks say it should.",
};

export default function ADHDTherapyPage() {
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
            ADHD therapy that works{" "}
            <em className="italic text-amber-700">with</em> your brain
          </h1>
          <p className="text-stone-400 font-serif mt-3">
            ADHD 心理治疗与辅导 · 为成人 ADHD 量身定制
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mt-6 max-w-2xl">
            Most therapy was designed for neurotypical brains. The advice sounds
            right — &quot;make a plan,&quot; &quot;break it down,&quot;
            &quot;stay consistent&quot; — but something always falls apart in
            practice. That gap between knowing and doing? It&apos;s not a
            willpower problem. It&apos;s how your nervous system is wired.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mt-4 max-w-2xl">
            I work with adults who are tired of being told to try harder. My
            approach starts with the neuroscience of how ADHD actually works, and
            builds outward from there.
          </p>
        </div>
      </section>

      {/* The real problem */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">
            What most people get wrong about ADHD
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              ADHD is a performance disorder, not a knowledge disorder. You
              already know what you need to do. The disconnect is between the
              part of your brain that acquires knowledge and the part that
              applies it to daily life — the prefrontal cortex. That&apos;s
              neurological, not motivational.
            </p>
            <p>
              Your brain runs on what researchers call an{" "}
              <strong className="text-stone-800">
                interest-based nervous system
              </strong>
              . Where a neurotypical brain can activate based on importance,
              priority, or deadlines, the ADHD brain activates through a
              different set of signals: things that are genuinely interesting,
              novel, challenging, urgent, or connected to something you care
              about.
            </p>
            <p>
              This is why you can hyperfocus on a new project for twelve hours
              but can&apos;t bring yourself to open an email. The dopamine
              system isn&apos;t broken — it works differently. Once you
              understand that, everything changes.
            </p>
          </div>
        </div>
      </section>

      {/* What you might recognise */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">
            You might recognise some of this
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                pattern: "The freeze",
                description:
                  "You know exactly what you need to do. You've known for days. But you can't start. The longer you wait, the harder it gets — and the shame builds.",
              },
              {
                pattern: "The cave",
                description:
                  "You stop opening emails, avoid messages, go quiet. Not because you don't care — because you care too much and the pile has become overwhelming.",
              },
              {
                pattern: "The spiral",
                description:
                  '"I\'m so lazy." "Why can\'t I just do this?" "Everyone else manages." That inner critic isn\'t helping you get moving — it\'s keeping your nervous system locked in threat mode.',
              },
              {
                pattern: "The last-minute sprint",
                description:
                  "Deadlines don't feel real until they're a crisis. Then suddenly you produce brilliant work at 2am. People call it procrastination. It's actually how urgency activates your brain.",
              },
              {
                pattern: "The rejection sting",
                description:
                  "A slightly off tone in someone's email can derail your whole day. Perceived criticism lands like a physical blow. You replay conversations for hours.",
              },
              {
                pattern: "The novelty trap",
                description:
                  "New projects feel electric. Week six hits and everything goes flat. It's not that you're flaky — it's that the dopamine surge has equilibrated, and your brain needs something fresh.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-stone-200"
              >
                <h3 className="font-serif text-lg text-stone-800 mb-2">
                  {item.pattern}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-stone-600 mt-8 leading-relaxed">
            These aren&apos;t character flaws. They&apos;re neurological
            patterns with names, mechanisms, and — most importantly —
            interventions that actually work when they&apos;re designed for your
            brain.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">
            How I work with ADHD
          </h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            I combine clinical therapy with practical ADHD-specific strategies.
            Sessions are adapted to how the ADHD brain processes information —
            shorter explanations, more movement between topics, concrete
            takeaways, and zero judgment about what happened (or didn&apos;t
            happen) between sessions.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Understanding your nervous system
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We start by mapping how your brain actually works — your energy
                patterns, what triggers your motivation, what shuts you down, how
                rejection sensitivity shows up in your life. This isn&apos;t a
                personality quiz. It&apos;s building a working model of your
                neurology so every strategy we use fits you, not a textbook.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Integrative modalities, ADHD-adapted
              </h3>
              <p className="text-stone-600 leading-relaxed">
                I draw from EMDR for trauma processing, IFS (Internal Family
                Systems) for working with the inner critic, ACT for building
                psychological flexibility, CBT for practical thought patterns,
                and DBT for emotional regulation. Each modality is adapted to
                work with the ADHD brain — shorter exercises, more
                externalisation, and no homework that requires sustained
                willpower.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                The shame layer
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Most adults with ADHD carry years of accumulated shame —
                &quot;lazy,&quot; &quot;unreliable,&quot; &quot;not living up to
                potential.&quot; Self-criticism isn&apos;t just painful; it keeps
                your nervous system stuck in threat mode, which physically blocks
                the executive functions you&apos;re trying to access.
                Self-compassion isn&apos;t a soft add-on. It&apos;s a
                neurological prerequisite for your brain to come online.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                Practical strategies that survive Monday morning
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Knowing about ADHD is the easy part. Making that knowledge
                functional in daily life is the hard part — and it&apos;s where
                most approaches fall short. We build external systems, routines
                that account for inconsistency, and strategies anchored to your
                specific motivation triggers. Not generic productivity advice.
                Systems designed for how your brain actually operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-6 bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            This might be a good fit if you...
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Were diagnosed recently and are still making sense of it. Or were
              diagnosed years ago and feel like you&apos;ve hit a ceiling with
              medication alone.
            </p>
            <p>
              Have tried therapy before but found it frustrating — too slow, too
              much talking about feelings without enough practical change.
            </p>
            <p>
              Struggle with the emotional side of ADHD — the shame, the
              rejection sensitivity, the self-doubt — more than the
              organisational stuff.
            </p>
            <p>
              Want someone who actually understands how ADHD works from the
              inside, not someone reading from a manual. I have ADHD myself. I
              know the terrain.
            </p>
            <p>
              Speak Mandarin and want therapy in your first language, or need
              someone who understands the cultural context of being
              Chinese-Australian with a neurodivergent brain.
            </p>
          </div>
        </div>
      </section>

      {/* Bilingual note */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">
            中文 ADHD 心理治疗
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            许多华人在成长过程中，从未听说过 ADHD
            这个概念。注意力问题被归结为&quot;不够努力&quot;、&quot;太懒&quot;或&quot;聪明但不用功&quot;。这些标签留下的伤痕，往往比
            ADHD 本身更深。
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            我提供中英双语的 ADHD
            心理治疗，理解华人文化背景下对心理健康和神经多样性的看法。如果你更习惯用中文表达内心感受，或者需要一个真正理解你文化背景的治疗师，欢迎预约免费咨询。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-stone-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-4">
            Curious whether this could help?
          </h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            The first step is a free 15-minute conversation. No intake forms, no
            commitment. We talk about what&apos;s going on and whether my
            approach makes sense for your situation.
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

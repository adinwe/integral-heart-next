import Link from "next/link";

export const metadata = {
  title: "NDIS Psychosocial Support — Integral Heart Therapy",
  description:
    "NDIS-funded social work therapy and psychosocial recovery coaching under Capacity Building. Bilingual support in English and Mandarin across Australia.",
};

export default function NDISSupportPage() {
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
            NDIS psychosocial{" "}
            <em className="italic text-amber-700">recovery support</em>
          </h1>
          <p className="text-stone-400 font-serif mt-3">
            NDIS 心理社会康复支持 · 能力建设类别
          </p>
          <p className="text-lg text-stone-600 leading-relaxed mt-6 max-w-2xl">
            I provide social work therapy and psychosocial recovery coaching
            under the NDIS Capacity Building budget. My work is person-centred,
            trauma-informed, and grounded in helping you build the skills and
            confidence to live the life you want — at your pace, in your way.
          </p>
        </div>
      </section>

      {/* What I provide */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            What I provide under the NDIS
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              As a registered social worker, I deliver therapy and recovery
              coaching funded through the{" "}
              <strong className="text-stone-800">
                Improved Daily Living
              </strong>{" "}
              line item within Capacity Building. This covers therapeutic
              supports that help you develop coping strategies, manage the
              psychosocial impact of your disability, and work toward your NDIS
              goals.
            </p>
            <p>
              This is clinical work, not just &quot;support.&quot; I use
              evidence-based therapeutic approaches — CBT, ACT, DBT, EMDR, IFS
              — tailored to your needs and adapted for any co-occurring
              conditions like ADHD, autism, or trauma.
            </p>
          </div>
        </div>
      </section>

      {/* What sessions look like */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">
            What sessions look like
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Emotional regulation and coping",
                description:
                  "Learning to manage anxiety, mood swings, overwhelm, and emotional flooding in daily life. Practical techniques you can actually use — not just ideas that sound good in a session.",
              },
              {
                title: "Trauma processing",
                description:
                  "Working through past experiences that continue to affect how you feel and function. This might include EMDR, somatic approaches, or talk-based processing — whatever suits you best.",
              },
              {
                title: "Social skills and relationships",
                description:
                  "Navigating communication, setting boundaries, managing conflict, and building relationships that feel safe. Particularly relevant for people with ADHD, autism, or social anxiety.",
              },
              {
                title: "Daily living and independence",
                description:
                  "Building routines, managing executive function challenges, developing problem-solving strategies, and increasing your confidence in handling daily life without depending on crisis responses.",
              },
              {
                title: "Identity and self-advocacy",
                description:
                  "Understanding your disability on your own terms, developing a sense of self beyond diagnosis labels, and learning to advocate for what you need in healthcare, work, and relationships.",
              },
              {
                title: "Cultural and family navigation",
                description:
                  "For clients from CALD backgrounds — navigating cultural expectations around disability and mental health, family dynamics, and the gap between what your community understands and what you need.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-stone-200"
              >
                <h3 className="font-serif text-lg text-stone-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How funding works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            How the funding works
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              My services are funded through the{" "}
              <strong className="text-stone-800">Capacity Building</strong>{" "}
              category of your NDIS plan, specifically{" "}
              <strong className="text-stone-800">Improved Daily Living</strong>.
              I work with both plan-managed and self-managed participants. If
              you&apos;re agency-managed, we can discuss whether a service
              booking is possible.
            </p>
            <p>
              You don&apos;t pay out of pocket — sessions are billed directly
              through your plan manager or claimed through your self-managed
              budget. I charge at the NDIS price guide rate for social work
              therapy.
            </p>
            <p>
              If you&apos;re unsure whether your plan covers this, I can help
              you check. Many people have capacity building funding they
              haven&apos;t used because they didn&apos;t know social work
              therapy was an option.
            </p>
          </div>

          <div className="mt-8 bg-stone-50 rounded-xl p-6 border border-stone-200">
            <h3 className="font-serif text-lg text-stone-800 mb-3">
              Plan management types I work with
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm font-medium text-stone-800 mb-1">
                  Self-managed
                </div>
                <p className="text-xs text-stone-500">
                  You claim directly from your plan budget. I provide invoices
                  for you to process.
                </p>
              </div>
              <div>
                <div className="text-sm font-medium text-stone-800 mb-1">
                  Plan-managed
                </div>
                <p className="text-xs text-stone-500">
                  Your plan manager pays my invoices. No cost to you. This is
                  the most common arrangement.
                </p>
              </div>
              <div>
                <div className="text-sm font-medium text-stone-800 mb-1">
                  Agency-managed
                </div>
                <p className="text-xs text-stone-500">
                  May require a service booking through the NDIA. Contact me to
                  discuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            Who I typically work with
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Adults and young adults with psychosocial disabilities — including
              ADHD, autism, PTSD, anxiety disorders, depression, personality
              disorders, and other conditions that affect your capacity to
              participate in daily life.
            </p>
            <p>
              People who have tried support workers and found they needed more
              than practical help — they needed someone who could work
              therapeutically on the underlying patterns.
            </p>
            <p>
              Chinese-Australian participants who want therapy in Mandarin, or
              who need a therapist who understands the cultural context of
              navigating disability and mental health in a Chinese family.
            </p>
            <p>
              Participants who have had mixed experiences with the mental health
              system and want someone who treats them as a whole person, not a
              set of deficits to manage.
            </p>
          </div>
        </div>
      </section>

      {/* Bilingual */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">
            中文 NDIS 心理社会支持
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            我为 NDIS 参与者提供中英双语的社会工作治疗和心理社会康复辅导。如果你或你的家人更习惯用中文沟通，或者在理解
            NDIS 系统时遇到了语言障碍，我可以帮助你理清你的计划中有哪些可用的支持。
          </p>
          <p className="text-stone-600 leading-relaxed">
            许多华人 NDIS
            参与者不知道自己的计划中包含心理治疗方面的资金。如果你不确定，欢迎联系我，我可以帮你查看。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-stone-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-4">
            Want to find out if your plan covers this?
          </h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            A free 15-minute call is the easiest way to work this out. Bring
            your NDIS plan (or just the plan number) and I&apos;ll help you
            understand what&apos;s available.
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

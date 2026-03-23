import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/85 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif text-stone-800">
            Integral Heart <span className="text-stone-500 text-sm ml-2">整合心理</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Services</Link>
            <Link href="#pricing" className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Pricing</Link>
            <Link href="#faq" className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors">FAQ</Link>
            <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                  className="bg-stone-800 text-stone-50 px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-700 transition-all duration-300"
                  target="_blank">
              Book a Session
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
              Therapy that <em className="italic text-amber-700">meets you</em> where you are
            </h1>
            <p className="text-lg text-stone-400 font-serif">整合心理治疗 · 中英双语服务</p>
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
              Integrative therapy for ADHD, trauma, and life transitions — in English and Mandarin.
              Online sessions across Australia, grounded in evidence-based and holistic practice.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                    className="inline-flex items-center gap-2 bg-stone-800 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-700 transition-all duration-300"
                    target="_blank">
                Book Free 15-Min Consult →
              </Link>
              <Link href="#services"
                    className="inline-flex items-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full font-medium hover:border-stone-500 hover:text-stone-900 transition-all duration-300">
                Explore Services
              </Link>
            </div>
            <div className="flex gap-6 pt-6 border-t border-stone-200 flex-wrap">
              <span className="text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Registered Social Worker (AASW)
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                EMDR Trained (Levels 1–2)
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Telehealth Australia-wide
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/elias-photo.png"
                alt="Yatong (Elias) - Integral Heart Therapy"
                width={320}
                height={320}
                className="rounded-full object-cover border-4 border-stone-100 shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-stone-200">
                <div className="text-center">
                  <div className="font-semibold text-stone-800 text-sm">Yatong (Elias)</div>
                  <div className="text-xs text-stone-500 mt-1">
                    Registered Social Worker<br />
                    BSW · EMDR · IFS · ACT · DBT<br />
                    English 英文 · 中文 Mandarin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-900 mb-16">How I can help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "ADHD Therapy & Coaching",
                subtitle: "ADHD 心理治疗与辅导",
                description: "Practical strategies and deeper emotional work for adults with ADHD — designed for how your brain actually works.",
                href: "/adhd-therapy"
              },              {
                icon: "🌿",
                title: "EMDR Trauma Therapy",
                subtitle: "EMDR 创伤治疗",
                description: "Evidence-based trauma reprocessing for PTSD, complex trauma, anxiety, and accumulated shame.",
                href: "/emdr-therapy"
              },
              {
                icon: "🌏",
                title: "Bilingual Counselling",
                subtitle: "中英双语心理咨询",
                description: "Therapy in Mandarin or English for Chinese-Australians navigating cultural identity, family dynamics, and mental health.",
                href: "#languages"
              },
              {
                icon: "💛",
                title: "NDIS Psychosocial Support",
                subtitle: "NDIS 心理社会康复辅导",
                description: "Social work therapy under Capacity Building — recovery coaching, emotional regulation, and daily living skills.",
                href: "/ndis-support"
              }
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-left block group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-stone-400 mb-3 font-serif">{service.subtitle}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-sm text-amber-700 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual section */}
      <section id="languages" className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-6">中英双语心理咨询</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  如果你更习惯用中文表达内心感受，或者需要一个真正理解华人文化背景的治疗师，我可以帮助你。
                </p>
                <p>
                  许多华人在成长过程中从未接触过心理健康的概念。心理问题常常被归结为&quot;想太多&quot;或&quot;不够坚强&quot;。来到澳大利亚后，在一个完全不同的文化中寻求心理支持，又面临着语言和理解上的隔阂。
                </p>
                <p>
                  我提供完全中文的心理治疗，同时深刻理解在两种文化之间生活的复杂感受。你不需要翻译自己的经历——我已经在那里了。
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-6">Bilingual therapy</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  For Chinese-Australians, accessing mental health support often means navigating a system that doesn&apos;t fully understand your cultural context. Concepts like filial piety, family face, and intergenerational expectations shape your experience in ways a therapist needs to get.
                </p>
                <p>
                  I offer sessions in Mandarin, English, or a mix of both — whatever feels most natural to you. Some things land better in Mandarin. Some in English. The ability to switch between languages in therapy isn&apos;t a convenience; it&apos;s a therapeutic tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">
              Transparent pricing
            </h2>
            <p className="text-stone-500 font-serif mb-2">收费标准</p>
            <p className="text-stone-500 text-sm max-w-xl mx-auto">
              All prices in AUD. Sliding scale available for those experiencing financial hardship — mention this during your free discovery call.
            </p>
          </div>

          {/* Free Discovery Call Banner */}
          <div className="mb-12 bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-2">Start here</div>
              <h3 className="text-2xl font-serif mb-2">Free 15-Minute Discovery Call</h3>
              <p className="text-stone-300 text-sm max-w-md">
                Not sure where to begin? This is a no-pressure conversation to talk about what&apos;s going on and whether my approach is the right fit. Available in English or Mandarin.
              </p>
            </div>
            <Link
              href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
              className="bg-white text-stone-800 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-100 transition-all duration-300 whitespace-nowrap shadow-sm"
              target="_blank"
            >
              Book Free Call →
            </Link>
          </div>

          {/* Individual Sessions */}
          <div className="mb-14">
            <h3 className="text-xl font-serif text-stone-900 mb-2">Individual sessions</h3>
            <p className="text-sm text-stone-500 mb-6">Pay-as-you-go — no ongoing commitment required</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "Therapy Session",
                  price: "$150",
                  duration: "55 min",
                  description: "General integrative therapy for ADHD, anxiety, depression, life transitions, identity, or emotional regulation. I draw from ACT, IFS, DBT, and somatic approaches — adapted to how your brain works, not a one-size-fits-all model.",
                  features: ["Tailored to your needs and goals", "ADHD-adapted pacing and structure", "Secure telehealth platform", "Session notes provided"],
                  cta: "Book Session",
                },
                {
                  label: "EMDR Trauma Session",
                  price: "$170",
                  duration: "55 min",
                  description: "Targeted trauma reprocessing using bilateral stimulation. For PTSD, complex trauma, phobias, accumulated shame, or anxiety rooted in past experiences. Uses a specialised telehealth platform with a built-in light bar.",
                  features: ["Full EMDR protocol", "Built-in light bar for bilateral stimulation", "ADHD-adapted session structure", "Thorough grounding and closure"],
                  featured: true,
                  cta: "Book Session",
                },
                {
                  label: "Extended Session",
                  price: "$260",
                  duration: "90 min",                  description: "A longer session for when 55 minutes isn't enough. Ideal for complex or layered trauma, intensive EMDR processing, or sessions where you need more space to go deeper without feeling rushed at the end.",
                  features: ["Extended processing time", "Complex trauma work", "Thorough closure and grounding", "Recommended for intensive phases"],
                  cta: "Book Session",
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                    plan.featured
                      ? "border-amber-200 bg-stone-800 text-white shadow-xl relative"
                      : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-md"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-6 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </div>
                  )}
                  <div
                    className={`text-xs uppercase tracking-widest font-semibold mb-4 ${
                      plan.featured ? "text-amber-200" : "text-amber-700"
                    }`}
                  >
                    {plan.label}
                  </div>
                  <div className="mb-1">
                    <span
                      className={`text-4xl font-serif ${
                        plan.featured ? "text-white" : "text-stone-900"
                      }`}
                    >                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        plan.featured ? "text-stone-300" : "text-stone-500"
                      }`}
                    >
                      AUD
                    </span>
                  </div>
                  <div className={`text-sm mb-4 ${plan.featured ? "text-stone-300" : "text-stone-500"}`}>
                    {plan.duration}
                  </div>
                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      plan.featured ? "text-stone-200" : "text-stone-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul
                    className={`text-sm space-y-2.5 mb-8 text-left flex-1 ${
                      plan.featured ? "text-stone-300" : "text-stone-600"
                    }`}
                  >
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-amber-400" : "text-green-600"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                    className={`block w-full py-3 rounded-full text-sm font-medium transition-all duration-300 text-center ${
                      plan.featured
                        ? "bg-amber-600 hover:bg-amber-500 text-white"
                        : "bg-stone-800 hover:bg-amber-700 text-white"
                    }`}
                    target="_blank"
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Specialised Sessions & Packages */}
          <div className="mb-14 grid md:grid-cols-2 gap-6">
            {/* Parent Strategy Session */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300">
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-2">Parent Strategy Session</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$150</span>
                <span className="text-sm ml-2 text-stone-500">AUD · 50 min</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-4">                A focused session for parents navigating challenges with their child&apos;s behaviour, emotional regulation, or neurodivergence. You&apos;ll leave with practical, evidence-based strategies you can start using right away — not just general advice.
              </p>
              <ul className="text-sm text-stone-600 space-y-2 mb-6">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  Tailored to your child&apos;s needs
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  Evidence-based parenting strategies
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  Available in English or Mandarin
                </li>
              </ul>
              <Link
                href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 text-center"
                target="_blank"
              >
                Book Session
              </Link>
            </div>

            {/* 4-Session Package */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">4-Session Package</div>
                <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Save $40</div>
              </div>              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$560</span>
                <span className="text-sm ml-2 text-stone-500">AUD</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-4">
                Four standard therapy sessions at a reduced rate. Best for EMDR processing (which typically requires multiple sessions), working through a specific goal, or when you know you&apos;re committing to a course of treatment rather than a one-off.
              </p>
              <ul className="text-sm text-stone-600 space-y-2 mb-6">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  4 x 55-minute sessions
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  Use for therapy or EMDR sessions
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  Book at your own pace
                </li>
              </ul>
              <Link
                href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 text-center"
                target="_blank"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* NDIS Note */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col md:flex-row items-start gap-6">
            <div className="p-3 bg-amber-50 rounded-xl flex-shrink-0">              <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">NDIS Participants</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                Social work therapy billed through your Capacity Building budget (Improved Daily Living). I work with plan-managed and self-managed participants. Sessions are flexible in duration — no out-of-pocket cost. Many people have this funding without realising it can be used for therapy.
              </p>
              <Link
                href="/ndis-support"
                className="text-sm text-amber-700 font-medium hover:text-amber-800 transition-colors"
              >
                Learn more about NDIS support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-stone-900 mb-4 text-center">Frequently asked questions</h2>
          <p className="text-stone-500 text-center mb-12">常见问题</p>

          <div className="space-y-6">
            {[
              {
                q: "What's the difference between a social worker and a psychologist?",
                a: "Both can provide evidence-based therapy. As a registered social worker, I use the same modalities — CBT, ACT, DBT, EMDR, IFS — but I also consider the broader context of your life: housing, employment, family systems, cultural background, and access to services. If you need a formal psychological assessment or diagnosis, I can refer you to a psychologist or psychiatrist for that."              },
              {
                q: "Can you diagnose ADHD or other conditions?",
                a: "No. Formal diagnoses in Australia are made by psychiatrists, paediatricians, or psychologists with specific assessment training. What I can do is help you understand your experience, work through the emotional impact, develop practical strategies, and refer you to a clinician who can assess you if needed."
              },
              {
                q: "Do I need a referral or a Mental Health Care Plan?",
                a: "No referral or MHCP is needed to see me privately. I'm not a Medicare provider, so sessions are paid directly (or via NDIS). If cost is a concern, ask about my sliding scale or whether your NDIS plan includes Capacity Building funding for therapy."
              },
              {
                q: "How does telehealth work?",
                a: "Sessions happen over a secure video platform — similar to Zoom but designed for healthcare. You can join from any quiet, private space. I've found that most clients prefer telehealth once they've tried it. For EMDR specifically, I use a platform with a built-in light bar for bilateral stimulation, so the quality of processing is maintained."
              },
              {
                q: "I've tried therapy before and it didn't help. How is this different?",
                a: "Most therapy is designed for neurotypical brains. If you have ADHD or process the world differently, standard approaches can feel frustrating — too slow, too much talking, not enough practical change. I adapt my approach to how your brain works: shorter exercises, more variety within sessions, concrete takeaways, and no judgment when life gets in the way between sessions."
              },
              {
                q: "What if I don't know what I need help with?",
                a: "That's fine. Many people come in with a general sense that something isn't working — they're stuck, overwhelmed, or going through a transition. The free 15-minute call is a good place to start. We talk about what's going on, and I can help clarify whether therapy, coaching, or a combination makes sense."
              },
              {
                q: "Can I use my NDIS plan to pay for sessions?",
                a: "Yes, if your plan includes Capacity Building funding under Improved Daily Living. I work with plan-managed and self-managed participants. Many people have this funding without realising it can be used for social work therapy. Book a free call and I can help you check."
              },
              {
                q: "Is everything I say confidential?",
                a: "Yes, with a few legal exceptions that apply to all health practitioners in Australia — situations involving serious risk of harm to yourself or others, mandatory reporting obligations, or court orders. I'll explain these clearly in our first session. Outside of those exceptions, what we discuss stays between us."
              },
              {
                q: "我可以用中文做心理咨询吗？",
                a: "可以。我提供完全中文的心理治疗，也可以中英双语交替使用。你可以用最自然、最舒服的方式表达自己。很多来访者发现，某些感受用中文更容易表达，而其他想法用英文更准确。在治疗中自由切换语言，是一种很有价值的工具。"
              },            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-stone-800 font-serif text-lg hover:bg-stone-50 transition-colors">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-stone-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-stone-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-stone-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-4">Ready to begin?</h2>
          <p className="text-lg text-stone-400 font-serif mb-4">准备好开始了吗？</p>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            Your first step is a free 15-minute conversation. No forms, no commitment — just a chance to see if this feels right for you.
          </p>
          <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                className="inline-flex items-center gap-2 bg-white text-stone-800 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300"
                target="_blank">
            Book Your Free Discovery Call →
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-500 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2026 Integral Heart Therapy — Yatong (Elias)<br />
            Registered Social Worker · AASW #488174 · ABN 95 466 335 342
          </div>
          <div>
            <Link href="mailto:elias@integralhearttherapy.com.au" className="text-stone-400 hover:text-amber-200 transition-colors">
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

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
              },
              {
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-900 mb-16">Transparent pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Free Discovery Call",
                price: "$0",
                duration: "15 minutes",
                description: "See if we're a good fit — no pressure, no commitment.",
                features: ["Discuss your needs and goals", "Ask questions about my approach", "Available in English or Mandarin", "No obligation to continue"],
                featured: false,
                cta: "Book Free Call"
              },
              {
                label: "Individual Session",
                price: "$150",
                currency: "AUD",
                duration: "55 minutes",
                description: "Integrative therapy tailored to you — EMDR, ADHD, trauma, or general counselling.",
                features: ["EMDR, IFS, ACT, CBT, DBT modalities", "ADHD-adapted session structure", "Secure telehealth platform", "Session notes and resources provided"],
                featured: true,
                cta: "Book Session"
              },
              {
                label: "NDIS Participants",
                price: "NDIS funded",
                duration: "Flexible duration",
                description: "Social work therapy billed through your Capacity Building budget.",
                features: ["Therapeutic recovery coaching", "Plan-managed or self-managed", "Goal-focused, person-centred", "Bilingual service available"],
                featured: false,
                cta: "Enquire Now"
              }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border-2 transition-all duration-300 ${plan.featured ? 'border-amber-200 bg-stone-800 text-white scale-105 shadow-xl' : 'border-stone-200 bg-white hover:border-stone-300'}`}>
                <div className={`text-sm uppercase tracking-wide font-semibold mb-4 ${plan.featured ? 'text-amber-200' : 'text-green-600'}`}>
                  {plan.label}
                </div>
                <div className="mb-2">
                  <span className={`text-4xl font-serif ${plan.featured ? 'text-white' : 'text-stone-900'}`}>
                    {plan.price}
                  </span>
                  {plan.currency && <span className={`text-lg ml-2 ${plan.featured ? 'text-stone-300' : 'text-stone-500'}`}>{plan.currency}</span>}
                </div>
                <div className={`text-sm mb-6 ${plan.featured ? 'text-stone-300' : 'text-stone-500'}`}>
                  {plan.duration}
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${plan.featured ? 'text-stone-200' : 'text-stone-600'}`}>
                  {plan.description}
                </p>
                <ul className={`text-sm space-y-2 mb-8 text-left ${plan.featured ? 'text-stone-300' : 'text-stone-600'}`}>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-2 ${plan.featured ? 'bg-amber-400' : 'bg-green-600'} flex-shrink-0`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                      className={`block w-full py-3 rounded-full text-sm font-medium transition-all duration-300 text-center ${plan.featured ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-stone-800 hover:bg-amber-700 text-white'}`}
                      target="_blank">
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            Sliding scale available for those experiencing financial hardship — please mention this during your free discovery call.
          </p>
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
                a: "Both can provide evidence-based therapy. As a registered social worker, I use the same modalities — CBT, ACT, DBT, EMDR, IFS — but I also consider the broader context of your life: housing, employment, family systems, cultural background, and access to services. If you need a formal psychological assessment or diagnosis, I can refer you to a psychologist or psychiatrist for that."
              },
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
              },
            ].map((item, i) => (
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

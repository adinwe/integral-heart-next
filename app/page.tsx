"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const pathways = [
    {
      id: "parent",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      label: "I\u0027m a parent seeking support for my family",
      sublabel: "Parent sessions, family coaching & programs",
      color: "amber",
    },
    {
      id: "adhd",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      label: "I have ADHD and want coaching + therapy",
      sublabel: "EMDR, clinical packages & monthly coaching",
      color: "green",
    },
    {
      id: "trauma",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      label: "I need therapy for trauma, anxiety, or life changes",
      sublabel: "EMDR sessions & clinical packages",
      color: "rose",
    },
    {
      id: "ndis",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      label: "I\u0027m an NDIS participant",
      sublabel: "No out-of-pocket cost · Capacity Building",
      color: "blue",
    },
  ];

  function selectPathway(id: string) {
    setSelectedPathway(id);
    setTimeout(() => {
      pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // Visibility helper: show a card if no pathway selected or if the card belongs to the active pathway
  const show = (cardPathways: string[]) =>
    !selectedPathway || cardPathways.includes(selectedPathway);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif text-stone-800">
            Integral Heart <span className="text-stone-500 text-sm ml-2">整合心理</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-stone-200/80 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Clinical Therapy</div>
                    <Link href="#pricing" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">EMDR &amp; Trauma Therapy</div>
                        <div className="text-xs text-stone-500">Evidence-based trauma reprocessing</div>
                      </div>
                    </Link>
                    <Link href="#pricing" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">Integrative Therapy</div>
                        <div className="text-xs text-stone-500">ADHD, anxiety, depression, life transitions</div>
                      </div>
                    </Link>
                    <Link href="#pricing" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">Parent &amp; Family</div>
                        <div className="text-xs text-stone-500">Strategy sessions and family programs</div>
                      </div>
                    </Link>
                    <div className="my-1 border-t border-stone-100" />
                    <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Coaching Programs</div>
                    <Link href="#coaching" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-800 group-hover:text-green-700 transition-colors">Monthly Coaching</div>
                        <div className="text-xs text-stone-500">Foundations, Growth &amp; Intensive</div>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-stone-50 px-5 py-3 border-t border-stone-100">
                    <Link href="#pricing" onClick={() => setServicesOpen(false)} className="text-xs text-amber-700 font-medium hover:text-amber-800 transition-colors">
                      View all pricing →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="#pricing" className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Pricing</Link>
            <Link href="#faq" className="text-sm uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors">FAQ</Link>
            <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                  className="bg-stone-800 text-stone-50 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-amber-700 transition-all duration-300"
                  target="_blank">
              Book a Session
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-stone-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold py-2">Clinical Therapy</div>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-amber-700">EMDR &amp; Trauma Therapy</Link>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-amber-700">Integrative Therapy</Link>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-amber-700">Parent &amp; Family</Link>
              <div className="border-t border-stone-100 my-2" />
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold py-2">Coaching Programs</div>
              <Link href="#coaching" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-green-700">Monthly Coaching</Link>
              <div className="border-t border-stone-100 my-2" />
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-sm text-stone-700 hover:text-stone-900">FAQ</Link>
              <Link
                href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                className="block w-full text-center bg-stone-800 text-white py-3 rounded-full text-sm font-medium hover:bg-amber-700 transition-all mt-3"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Session
              </Link>
            </div>
          </div>
        )}
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
                <span className="w-2 h-2 bg-green-600 rounded-full" aria-hidden="true"></span>
                Registered Social Worker (AASW)
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full" aria-hidden="true"></span>
                EMDR Trained (Levels 1–2)
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full" aria-hidden="true"></span>
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
                icon: (
                  <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "ADHD Therapy & Coaching",
                subtitle: "ADHD 心理治疗与辅导",
                description: "Practical strategies and deeper emotional work for adults with ADHD — designed for how your brain actually works.",
                href: "/adhd-therapy"
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "EMDR Trauma Therapy",
                subtitle: "EMDR 创伤治疗",
                description: "Evidence-based trauma reprocessing for PTSD, complex trauma, anxiety, and accumulated shame.",
                href: "/emdr-therapy"
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3m0 2.364a48.345 48.345 0 00-.334 0" />
                  </svg>
                ),
                title: "Bilingual Counselling",
                subtitle: "中英双语心理咨询",
                description: "Therapy in Mandarin or English for Chinese-Australians navigating cultural identity, family dynamics, and mental health.",
                href: "#languages"
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "NDIS Psychosocial Support",
                subtitle: "NDIS 心理社会康复辅导",
                description: "Social work therapy under Capacity Building — recovery coaching, emotional regulation, and daily living skills.",
                href: "/ndis-support"
              }
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-left block group">
                <div className="mb-4 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">{service.icon}</div>
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

      {/* ═══════════════════════════════════════════ */}
      {/* "WHAT BRINGS YOU HERE?" GATEWAY              */}
      {/* ═══════════════════════════════════════════ */}
      <section id="gateway" className="py-20 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-stone-900 mb-3">What brings you here?</h2>
          <p className="text-stone-500 font-serif mb-2">你来这里的原因是什么？</p>
          <p className="text-stone-500 text-sm mb-12 max-w-lg mx-auto">
            Choose what feels closest — I&apos;ll show you the services and pricing most relevant to you.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {pathways.map((p) => {
              const isActive = selectedPathway === p.id;
              const colorMap: Record<string, { border: string; bg: string; icon: string; ring: string }> = {
                amber: { border: "border-amber-300", bg: "bg-amber-50", icon: "text-amber-700", ring: "ring-amber-200" },
                green: { border: "border-green-300", bg: "bg-green-50", icon: "text-green-700", ring: "ring-green-200" },
                rose: { border: "border-rose-300", bg: "bg-rose-50", icon: "text-rose-700", ring: "ring-rose-200" },
                blue: { border: "border-blue-300", bg: "bg-blue-50", icon: "text-blue-700", ring: "ring-blue-200" },
              };
              const c = colorMap[p.color];
              return (
                <button
                  key={p.id}
                  onClick={() => selectPathway(p.id)}
                  className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                    isActive
                      ? `${c.border} ${c.bg} ring-2 ${c.ring} shadow-md`
                      : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <div className="absolute top-3 right-3">
                      <svg className={`w-5 h-5 ${c.icon}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl ${isActive ? c.bg : "bg-stone-100"} flex items-center justify-center mb-3 transition-colors ${isActive ? c.icon : "text-stone-500 group-hover:text-stone-700"}`}>
                    {p.icon}
                  </div>
                  <div className={`font-medium text-sm ${isActive ? "text-stone-900" : "text-stone-700"}`}>{p.label}</div>
                  <div className="text-xs text-stone-500 mt-1">{p.sublabel}</div>
                </button>
              );
            })}
          </div>
          {selectedPathway && (
            <button
              onClick={() => setSelectedPathway(null)}
              className="mt-6 text-sm text-stone-500 hover:text-stone-700 transition-colors underline underline-offset-4 decoration-stone-300"
            >
              Show all options
            </button>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PRICING — CLINICAL THERAPY (ONE-TIME)      */}
      {/* ═══════════════════════════════════════════ */}
      <section id="pricing" ref={pricingRef} className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Transparent pricing</h2>
            <p className="text-stone-500 font-serif mb-2">收费标准</p>
            <p className="text-stone-500 text-sm max-w-xl mx-auto">
              All prices in AUD. Sliding scale available for those experiencing financial hardship — mention this during your free discovery call.
            </p>
          </div>

          {/* Free Discovery Call Banner — visible in all pathways except ndis */}
          {show(["parent", "adhd", "trauma"]) && (
          <div className="mb-14 bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500">
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
          )}

          {/* NDIS Pathway — special view */}
          {selectedPathway === "ndis" && (
            <div className="mb-14 bg-gradient-to-br from-blue-50 to-stone-50 rounded-2xl p-10 border-2 border-blue-200">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-3">NDIS Psychosocial Support</h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  No out-of-pocket cost
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Social work therapy billed through your Capacity Building budget (Improved Daily Living). I work with plan-managed and self-managed participants. Sessions are flexible in length and frequency — tailored to your goals and plan.
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Many people have this funding without realising it can be used for therapy. If you&apos;re not sure whether your plan covers it, book a free call and I&apos;ll help you check.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="inline-flex items-center justify-center gap-2 bg-stone-800 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300" target="_blank">
                    Book Free Enquiry Call →
                  </Link>
                  <Link href="/ndis-support" className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-3.5 rounded-full text-sm font-medium hover:border-stone-500 transition-all duration-300">
                    Learn More About NDIS
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Section: Clinical Therapy — visible for adhd, trauma, parent (not ndis) */}
          {show(["adhd", "trauma", "parent"]) && (
          <>
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-stone-900">Clinical Counselling &amp; Therapy</h3>
              <p className="text-sm text-stone-500">One-time sessions — no ongoing commitment required</p>
            </div>
          </div>

          {/* Clinical EMDR Cards */}
          {show(["adhd", "trauma"]) && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Clinical EMDR */}
            <div className="p-8 rounded-2xl border-2 border-amber-200 bg-stone-800 text-white shadow-xl relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most popular</div>
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-200 mb-4">Clinical EMDR</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-white">$170</span>
                <span className="text-sm ml-2 text-stone-300">AUD · 55 min</span>
              </div>
              <p className="text-sm text-stone-200 leading-relaxed mt-4 mb-6">
                Targeted trauma reprocessing using bilateral stimulation. For PTSD, complex trauma, phobias, accumulated shame, or anxiety rooted in past experiences. Uses a specialised telehealth platform with a built-in light bar.
              </p>
              <ul className="text-sm text-stone-300 space-y-2.5 mb-8 flex-1">
                {["Full EMDR protocol", "Built-in light bar for bilateral stimulation", "ADHD-adapted session structure", "Thorough grounding and closure"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white transition-all duration-300 text-center" target="_blank">
                Book Session
              </Link>
            </div>

            {/* Extended EMDR */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-4">Extended EMDR</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$260</span>
                <span className="text-sm ml-2 text-stone-500">AUD · 90 min</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-6">
                A longer session for when 55 minutes isn&apos;t enough. Ideal for complex or layered trauma, intensive EMDR processing, or sessions where you need more space to go deeper without feeling rushed at the end.
              </p>
              <ul className="text-sm text-stone-600 space-y-2.5 mb-8 flex-1">
                {["Extended processing time", "Complex trauma work", "Thorough closure and grounding", "Recommended for intensive phases"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 text-center" target="_blank">
                Book Session
              </Link>
            </div>
          </div>
          )}

          {/* Clinical Package + Parent Strategy */}
          {show(["adhd", "trauma", "parent"]) && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* 4-Session Clinical Package */}
            {show(["adhd", "trauma"]) && (
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">4-Session Clinical Package</div>
                <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Save $40</div>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$640</span>
                <span className="text-sm ml-2 text-stone-500">AUD</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-6">
                Four clinical therapy sessions at a reduced rate. Best for EMDR processing (which typically requires multiple sessions), working through a specific goal, or when you know you&apos;re committing to a course of treatment.
              </p>
              <ul className="text-sm text-stone-600 space-y-2.5 mb-8 flex-1">
                {["4 x 55-minute sessions", "Use for therapy or EMDR sessions", "Book at your own pace", "Flexible scheduling"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 text-center" target="_blank">
                Get Started
              </Link>
            </div>
            )}

            {/* Parent Strategy Session */}
            {show(["parent"]) && (
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-4">Parent Strategy Session</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$150</span>
                <span className="text-sm ml-2 text-stone-500">AUD · 50 min</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-6">
                A focused session for parents navigating challenges with their child&apos;s behaviour, emotional regulation, or neurodivergence. You&apos;ll leave with practical, evidence-based strategies you can start using right away — not just general advice.
              </p>
              <ul className="text-sm text-stone-600 space-y-2.5 mb-8 flex-1">
                {["Tailored to your child's needs", "Evidence-based parenting strategies", "Available in English or Mandarin"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 text-center" target="_blank">
                Book Session
              </Link>
            </div>
            )}
          </div>
          )}

          {/* Connected Family Program */}
          {show(["parent"]) && (
          <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-2">Connected Family Program</div>
                <div className="mb-1">
                  <span className="text-4xl font-serif text-stone-900">$1,800</span>
                  <span className="text-sm ml-2 text-stone-500">AUD · One-time</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mt-4 mb-4">
                  A comprehensive, structured program for families working through significant challenges — neurodivergence, communication breakdowns, behavioural concerns, or navigating a major transition together. Includes parent sessions, family sessions, individual child/teen sessions, and a detailed written summary with strategies.
                </p>
                <ul className="text-sm text-stone-600 space-y-2 flex flex-wrap gap-x-8">
                  {["10+ structured sessions", "Parent and child/teen individual sessions", "Family sessions included", "Written progress summary and strategy plan"].map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="self-start md:self-center px-8 py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-amber-700 text-white transition-all duration-300 whitespace-nowrap text-center" target="_blank">
                Book Free Consult →
              </Link>
            </div>
          </div>
          )}

          {/* NDIS Note */}
          {show(["adhd", "trauma", "parent"]) && (
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col md:flex-row items-start gap-6">
            <div className="p-3 bg-amber-50 rounded-xl flex-shrink-0">
              <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-800 mb-2">NDIS Participants</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                Social work therapy billed through your Capacity Building budget (Improved Daily Living). I work with plan-managed and self-managed participants. Sessions are flexible in duration — no out-of-pocket cost. Many people have this funding without realising it can be used for therapy.
              </p>
              <Link href="/ndis-support" className="text-sm text-amber-700 font-medium hover:text-amber-800 transition-colors">
                Learn more about NDIS support →
              </Link>
            </div>
          </div>
          )}
          </>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* COACHING PROGRAMS (RECURRING)               */}
      {/* ═══════════════════════════════════════════ */}
      {show(["adhd", "parent"]) && (
      <section id="coaching" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-stone-900">Coaching Programs</h3>
              <p className="text-sm text-stone-500">Monthly recurring — cancel anytime · Quarterly option available</p>
            </div>
          </div>

          {/* Individual Coaching */}
          {show(["adhd"]) && (
          <>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-4 ml-1">Individual Coaching</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Foundations",
                price: "$297",
                period: "/month",
                description: "For people who want structured, ongoing support beyond one-off therapy sessions. Includes regular check-ins, goal-setting, and accountability — built around your ADHD brain, not against it.",
                features: ["2 x coaching sessions per month", "Goal-setting and progress tracking", "Between-session support via messaging", "ADHD-adapted structure"],
                cta: "Start Foundations",
              },
              {
                label: "Growth",
                price: "$497",
                period: "/month",
                description: "A deeper coaching container for people actively working through a transition — career change, relationship shift, identity work, or building a new way of living. More frequent sessions with integrated therapeutic elements.",
                features: ["4 x sessions per month (weekly)", "Integrated coaching + therapy approach", "Priority scheduling", "Between-session voice note support"],
                featured: true,
                cta: "Start Growth",
              },
              {
                label: "Intensive",
                price: "$897",
                period: "/month",
                description: "The highest level of support. For people in crisis recovery, navigating a major life restructure, or wanting accelerated progress. Combines frequent sessions with on-demand access between meetings.",
                features: ["8 x sessions per month (twice weekly)", "On-demand support between sessions", "Emergency session availability", "Comprehensive written progress reviews"],
                cta: "Start Intensive",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                  plan.featured
                    ? "border-green-200 bg-stone-800 text-white shadow-xl relative"
                    : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-md"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className={`text-xs uppercase tracking-widest font-semibold mb-4 ${plan.featured ? "text-green-200" : "text-green-700"}`}>
                  {plan.label}
                </div>
                <div className="mb-1">
                  <span className={`text-4xl font-serif ${plan.featured ? "text-white" : "text-stone-900"}`}>{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.featured ? "text-stone-300" : "text-stone-500"}`}>{plan.period}</span>
                </div>
                <div className={`text-xs mb-4 ${plan.featured ? "text-stone-400" : "text-stone-400"}`}>or save with quarterly</div>
                <p className={`text-sm mb-6 leading-relaxed flex-1 ${plan.featured ? "text-stone-200" : "text-stone-600"}`}>
                  {plan.description}
                </p>
                <ul className={`text-sm space-y-2.5 mb-8 ${plan.featured ? "text-stone-300" : "text-stone-600"}`}>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-green-400" : "text-green-600"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK"
                  className={`block w-full py-3 rounded-full text-sm font-medium transition-all duration-300 text-center ${
                    plan.featured
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : "bg-stone-800 hover:bg-green-700 text-white"
                  }`}
                  target="_blank"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          </>
          )}

          {/* Family Coaching */}
          {show(["parent"]) && (
          <>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-stone-400 mb-4 ml-1">Family Coaching</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Family Core */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="text-xs uppercase tracking-widest font-semibold text-green-700 mb-4">Family Core</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$447</span>
                <span className="text-sm ml-1 text-stone-500">/month</span>
              </div>
              <div className="text-xs text-stone-400 mb-4">or save with quarterly</div>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                Ongoing family coaching for parents and families navigating neurodivergence, communication challenges, or behavioural concerns. Includes parent coaching sessions, family sessions, and between-session guidance.
              </p>
              <ul className="text-sm text-stone-600 space-y-2.5 mb-8">
                {["3 x sessions per month", "Mix of parent and family sessions", "Between-session messaging support", "Available in English or Mandarin"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-green-700 text-white transition-all duration-300 text-center" target="_blank">
                Start Family Core
              </Link>
            </div>

            {/* Family Extended */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="text-xs uppercase tracking-widest font-semibold text-green-700 mb-4">Family Extended</div>
              <div className="mb-1">
                <span className="text-4xl font-serif text-stone-900">$697</span>
                <span className="text-sm ml-1 text-stone-500">/month</span>
              </div>
              <div className="text-xs text-stone-400 mb-4">or save with quarterly</div>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                A more intensive family coaching package for families dealing with complex dynamics — blended families, co-parenting across households, adolescent mental health, or multi-generational conflict. Includes individual sessions for each parent, family sessions, and crisis support.
              </p>
              <ul className="text-sm text-stone-600 space-y-2.5 mb-8">
                {["5 x sessions per month", "Individual parent + family sessions", "Crisis support between sessions", "Written strategy summaries provided"].map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://app.carepatron.com/booking/YOUR-BOOKING-LINK" className="block w-full py-3 rounded-full text-sm font-medium bg-stone-800 hover:bg-green-700 text-white transition-all duration-300 text-center" target="_blank">
                Start Family Extended
              </Link>
            </div>
          </div>
          </>
          )}
        </div>
      </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-stone-900 mb-4 text-center">Frequently asked questions</h2>
          <p className="text-stone-500 text-center mb-12">常见问题</p>

          <div className="space-y-4">
            {[
              {
                q: "What\u0027s the difference between a social worker and a psychologist?",
                a: "Both can provide evidence-based therapy. As a registered social worker, I use the same modalities — CBT, ACT, DBT, EMDR, IFS — but I also consider the broader context of your life: housing, employment, family systems, cultural background, and access to services. If you need a formal psychological assessment or diagnosis, I can refer you to a psychologist or psychiatrist for that."
              },
              {
                q: "What\u0027s the difference between coaching and therapy?",
                a: "Therapy focuses on processing past experiences, trauma, and emotional pain. Coaching is forward-looking — it\u0027s about building strategies, accountability, and momentum toward specific goals. Many clients benefit from both, and my coaching programs integrate therapeutic elements where appropriate. If during coaching it becomes clear that deeper clinical work is needed, we can adjust."
              },
              {
                q: "Can you diagnose ADHD or other conditions?",
                a: "No. Formal diagnoses in Australia are made by psychiatrists, paediatricians, or psychologists with specific assessment training. What I can do is help you understand your experience, work through the emotional impact, develop practical strategies, and refer you to a clinician who can assess you if needed."
              },
              {
                q: "Do I need a referral or a Mental Health Care Plan?",
                a: "No referral or MHCP is needed to see me privately. I\u0027m not a Medicare provider, so sessions are paid directly (or via NDIS). If cost is a concern, ask about my sliding scale or whether your NDIS plan includes Capacity Building funding for therapy."
              },
              {
                q: "How does telehealth work?",
                a: "Sessions happen over a secure video platform — similar to Zoom but designed for healthcare. You can join from any quiet, private space. I\u0027ve found that most clients prefer telehealth once they\u0027ve tried it. For EMDR specifically, I use a platform with a built-in light bar for bilateral stimulation, so the quality of processing is maintained."
              },
              {
                q: "I\u0027ve tried therapy before and it didn\u0027t help. How is this different?",
                a: "Most therapy is designed for neurotypical brains. If you have ADHD or process the world differently, standard approaches can feel frustrating — too slow, too much talking, not enough practical change. I adapt my approach to how your brain works: shorter exercises, more variety within sessions, concrete takeaways, and no judgment when life gets in the way between sessions."
              },
              {
                q: "What if I don\u0027t know what I need help with?",
                a: "That\u0027s fine. Many people come in with a general sense that something isn\u0027t working — they\u0027re stuck, overwhelmed, or going through a transition. The free 15-minute call is a good place to start. We talk about what\u0027s going on, and I can help clarify whether therapy, coaching, or a combination makes sense."
              },
              {
                q: "Can I use my NDIS plan to pay for sessions?",
                a: "Yes, if your plan includes Capacity Building funding under Improved Daily Living. I work with plan-managed and self-managed participants. Many people have this funding without realising it can be used for social work therapy. Book a free call and I can help you check."
              },
              {
                q: "Is everything I say confidential?",
                a: "Yes, with a few legal exceptions that apply to all health practitioners in Australia — situations involving serious risk of harm to yourself or others, mandatory reporting obligations, or court orders. I\u0027ll explain these clearly in our first session. Outside of those exceptions, what we discuss stays between us."
              },
              {
                q: "我可以用中文做心理咨询吗？",
                a: "可以。我提供完全中文的心理治疗，也可以中英双语交替使用。你可以用最自然、最舒服的方式表达自己。很多来访者发现，某些感受用中文更容易表达，而其他想法用英文更准确。在治疗中自由切换语言，是一种很有价值的工具。"
              },
            ].map((item, i) => (
              <details key={i} className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-stone-800 font-serif text-lg hover:bg-stone-100 transition-colors">
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

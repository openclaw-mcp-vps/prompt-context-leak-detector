export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect When AI Prompts<br />
          <span className="text-[#58a6ff]">Leak Sensitive Context</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze your AI prompt templates for PII, API keys, and sensitive variable leaks.
          Get instant security scores and actionable sanitization strategies.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Detecting Leaks — $29/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["PII Detection", "Names, emails, SSNs"],
            ["API Key Scanning", "Tokens & secrets"],
            ["Context Leaks", "Variable injection risks"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt analyses",
              "Regex + ML-based detection",
              "Security score per prompt",
              "Sanitization recommendations",
              "API access included",
              "Priority support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What types of leaks does it detect?",
              "It detects PII (names, emails, phone numbers, SSNs), API keys and tokens, passwords, and sensitive context variables injected into prompt templates."
            ],
            [
              "How does the analysis work?",
              "We combine regex pattern matching for known sensitive formats with ML-based heuristics to catch novel or obfuscated leaks, then score each prompt from 0–100."
            ],
            [
              "Is my prompt data stored?",
              "No. Prompts are analyzed in-memory and never persisted. Your intellectual property stays private."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Prompt Context Leak Detector. All rights reserved.
      </footer>
    </main>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Context Leak Detector — Detect AI Prompt Data Leaks',
  description: 'Analyze AI prompt templates for PII, API keys, and sensitive context leaks. Get security scores and sanitization recommendations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f97ff534-4a7f-4ecb-952e-aa85dc1caf26"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

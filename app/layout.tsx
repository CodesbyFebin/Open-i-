import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Open •i• — The Open Agent Harness & ADE',
    template: '%s | Open •i•',
  },
  description: 'Open •i• is the open-source agent harness and Agent Development Environment. Swarm orchestration, adaptive vector memory, self-learning intelligence, zero-trust federation, and a polished desktop + mobile workspace for any CLI agent.',
  keywords: ['agent harness', 'agentic AI', 'multi-agent', 'swarm', 'MCP', 'vector memory', 'ADE', 'Claude Code', 'Codex', 'open source'],
  openGraph: {
    type: 'website',
    url: 'https://codesbyfebin.github.io/Open-i-/',
    siteName: 'Open •i•',
    title: 'Open •i• — The Open Agent Harness & ADE',
    description: 'Open-source agent harness fusing deep orchestration with a polished multi-agent workspace.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Open •i•' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open •i• — The Open Agent Harness & ADE',
    description: 'Open-source agent harness. Swarm. Memory. Learning. Federation. Any agent.',
    images: ['/og.jpg'],
    creator: '@Codesbyfebin',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

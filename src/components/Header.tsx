'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  { href: '/about', label: 'ABOUT' },
  { href: '/works', label: 'WORKS' },
  { href: '/order', label: 'ORDER' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-[0.2em]" style={{ color: 'var(--fg)' }}>WEFT STUDIO</Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-xs tracking-[0.15em] hover:opacity-60 transition-opacity" style={{ color: 'var(--fg)' }}>{n.label}</Link>
          ))}
          <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.15em] px-4 py-2 border transition-opacity hover:opacity-60" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>ORDER →</a>
        </nav>
        <button className="md:hidden" style={{ color: 'var(--fg)' }} onClick={() => setOpen(v => !v)} aria-label="メニュー">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t px-6 py-6 flex flex-col gap-5" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm tracking-[0.15em]" style={{ color: 'var(--fg)' }} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[0.15em] self-start px-4 py-2 border" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>ORDER →</a>
        </div>
      )}
    </header>
  );
}

import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-display text-base tracking-[0.2em]" style={{ color: 'var(--fg)' }}>WEFT STUDIO</Link>
        <nav className="flex items-center gap-6 text-xs tracking-[0.1em]" style={{ color: 'var(--muted)' }}>
          <Link href="/about" className="hover:opacity-60 transition-opacity">ABOUT</Link>
          <Link href="/works" className="hover:opacity-60 transition-opacity">WORKS</Link>
          <Link href="/order" className="hover:opacity-60 transition-opacity">ORDER</Link>
          <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">INSTAGRAM</a>
        </nav>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>© 2026 WEFT STUDIO</p>
      </div>
    </footer>
  );
}

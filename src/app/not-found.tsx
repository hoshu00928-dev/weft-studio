import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section text-center">
      <p className="font-display text-4xl mb-4" style={{ color: 'var(--gold)' }}>404</p>
      <h1 className="font-display text-2xl mb-3" style={{ color: 'var(--fg)' }}>ページが見つかりませんでした</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>お探しのページは削除されたか、URLが間違っている可能性があります。</p>
      <Link href="/" className="inline-block px-8 py-3 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>トップへ戻る</Link>
    </section>
  );
}

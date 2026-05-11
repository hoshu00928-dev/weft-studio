import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80" alt="ウェディングタペストリー" fill className="object-cover" style={{ filter: 'brightness(0.45)' }} priority unoptimized />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-white/70 uppercase">Wedding Tapestry</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: '#FDFAF7' }}>
            ふたりが出会った日を、<br />布に刻む。
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-white/75 max-w-md">
            写真とデザインで作る、あなただけのウェディングタペストリー。<br />
            一生に一度の式を、もっと「ふたりらしく」。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>ご注文はこちら</a>
            <Link href="/works" className="px-8 py-3 text-sm tracking-[0.15em] border border-white/50 text-white transition-opacity hover:opacity-80">作品を見る</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { num: '01', title: 'ふたりの写真で作る', body: '大切な写真を1枚から使用。世界にひとつだけのデザインを。' },
            { num: '02', title: '全国配送対応', body: '600×1800mmの縦長バナー型。式場に直接お届けも可能。' },
            { num: '03', title: '残念な思いをさせない', body: 'ご希望に応えられない場合はお断りします。品質を守ることが私たちの約束。' },
          ].map(f => (
            <div key={f.num} className="flex flex-col items-center gap-4">
              <span className="font-display text-3xl" style={{ color: 'var(--gold)' }}>{f.num}</span>
              <h3 className="text-base font-medium tracking-wide" style={{ color: 'var(--fg)' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="h-px" style={{ backgroundColor: 'var(--border)' }} /></div>

      <section className="section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] mb-2" style={{ color: 'var(--gold)' }}>WORKS</p>
            <h2 className="font-display text-2xl sm:text-3xl" style={{ color: 'var(--fg)' }}>作品ギャラリー</h2>
          </div>
          <Link href="/works" className="text-xs tracking-[0.15em] hover:opacity-60 transition-opacity" style={{ color: 'var(--muted)' }}>すべて見る →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80','https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80','https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80'].map((src, i) => (
            <div key={i} className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <Image src={src} alt={`作品 ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
            </div>
          ))}
        </div>
      </section>

      <section className="section text-center">
        <p className="text-xs tracking-[0.2em] mb-4" style={{ color: 'var(--gold)' }}>ORDER</p>
        <h2 className="font-display text-2xl sm:text-3xl mb-4" style={{ color: 'var(--fg)' }}>あなたの式のために</h2>
        <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
          テンプレートプラン ¥9,800 〜<br />式の3週間前までに Instagram DM からご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>Instagram DM でご注文</a>
          <Link href="/order" className="px-8 py-3 text-sm tracking-[0.15em] border transition-opacity hover:opacity-60" style={{ borderColor: 'var(--border)', color: 'var(--fg)' }}>プラン・料金を見る</Link>
        </div>
      </section>
    </>
  );
}

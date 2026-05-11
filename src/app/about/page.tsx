import Image from 'next/image';
export const metadata = { title: 'ABOUT — WEFT STUDIO' };
export default function AboutPage() {
  return (
    <>
      <section className="section pb-0">
        <p className="text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>ABOUT</p>
        <h1 className="font-display text-3xl sm:text-4xl" style={{ color: 'var(--fg)' }}>WEFT STUDIOについて</h1>
      </section>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
            <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80" alt="WEFT STUDIO" fill className="object-cover" unoptimized />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl" style={{ color: 'var(--fg)' }}>weft — 織物の横糸</h2>
            <div className="flex flex-col gap-4 text-sm leading-loose" style={{ color: 'var(--muted)' }}>
              <p>weftとは、織物の横糸のこと。縦糸と横糸が交わることで、はじめて布になります。</p>
              <p>ふたりが出会い、交わり、ひとつになる。WEFT STUDIOはその瞬間を形にするために生まれました。</p>
              <p>私たちは自分たちの結婚式でタペストリーを手作りしました。写真を選び、デザインを考え、当日に飾ったその1枚は、今でも部屋に飾っています。</p>
              <p>その体験から、「もっとたくさんのカップルに、ふたりらしい式を届けたい」という思いが生まれました。</p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6"><div className="h-px" style={{ backgroundColor: 'var(--border)' }} /></div>
      <section className="section text-center">
        <p className="text-xs tracking-[0.2em] mb-4" style={{ color: 'var(--gold)' }}>OUR PROMISE</p>
        <h2 className="font-display text-2xl sm:text-3xl mb-8" style={{ color: 'var(--fg)' }}>一生に一度の式で、<br />残念な思いを絶対にさせない。</h2>
        <p className="text-sm leading-loose max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>ご希望に応えられないと判断した場合は、お断りすることがあります。適当に受けて間に合わせることより、断る勇気の方が大切だと考えています。品質を守ることが、私たちにできる最大の誠意です。</p>
      </section>
      <section className="section pt-0">
        <div className="rounded-sm p-8 md:p-12" style={{ backgroundColor: 'var(--cream)' }}>
          <h3 className="font-display text-lg mb-6" style={{ color: 'var(--fg)' }}>製品仕様</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[['サイズ','600mm × 1800mm（縦長バナー型）'],['素材','光沢フォト印刷'],['印刷','Oh Print Me（韓国発・グローバル印刷サービス）'],['配送','全国対応・顧客住所へ直送'],['デザインツール','Canva Pro'],['対応エリア','全国（沖縄・離島含む）']].map(([l,v]) => (
              <div key={l} className="flex flex-col gap-1">
                <dt className="text-xs tracking-[0.1em]" style={{ color: 'var(--gold)' }}>{l}</dt>
                <dd style={{ color: 'var(--fg)' }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

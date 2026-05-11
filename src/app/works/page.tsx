import Image from 'next/image';
export const metadata = { title: 'WORKS — WEFT STUDIO' };
const works = [
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', label: 'モノクロ写真 × シンプルタイポ' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', label: 'ナチュラル × ボタニカル' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', label: 'ドライフラワー × ゴールド' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', label: 'ミラー調 × モダン' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', label: 'フォトコラージュ × クラシック' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80', label: 'パンパスグラス × ナチュラル' },
];
export default function WorksPage() {
  return (
    <>
      <section className="section pb-0">
        <p className="text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>WORKS</p>
        <h1 className="font-display text-3xl sm:text-4xl mb-2" style={{ color: 'var(--fg)' }}>作品ギャラリー</h1>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>※ 掲載作品はイメージです。実際の注文作品は掲載許可をいただいた方のみ公開しています。</p>
      </section>
      <section className="section">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((w, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
                <Image src={w.src} alt={w.label} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{w.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0 text-center">
        <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>あなたのイメージをInstagram DMでお気軽にご相談ください。</p>
        <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>ご相談・ご注文はこちら</a>
      </section>
    </>
  );
}

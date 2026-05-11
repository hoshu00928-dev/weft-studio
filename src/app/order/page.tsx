import Link from 'next/link';
export const metadata = { title: 'ORDER — WEFT STUDIO' };
const steps = [
  { num: '01', title: 'Instagram DM でご連絡', body: '@weft_studio へ「タペストリーについて相談したい」とDMをお送りください。' },
  { num: '02', title: 'ヒアリング', body: '写真・雰囲気・式の日程などをお聞きします。（DM上でのやりとり）' },
  { num: '03', title: 'デザイン確認', body: 'ご要望をもとにデザインを作成。プレビューをお送りします。' },
  { num: '04', title: 'ご入金', body: '確認後、銀行振込にてお支払いをお願いします。' },
  { num: '05', title: '印刷・発送', body: 'Oh Print Meにて印刷後、ご指定の住所へ直送します。' },
];
const faqs = [
  { q: '写真は何枚使えますか？', a: 'テンプレートプランは1〜2枚、フルカスタムプランはご相談いただけます。' },
  { q: 'サイズの変更はできますか？', a: '現在は600×1800mmのみ対応。他サイズはご相談ください。' },
  { q: '式場への直送はできますか？', a: 'はい、可能です。住所と搬入日程をお知らせください。' },
  { q: '納期はどれくらいですか？', a: '印刷・発送から到着まで約1〜2週間。式の3〜4週間前にご注文ください。' },
  { q: 'データだけの購入はできますか？', a: '現在は印刷込みのプランのみ対応しています。' },
  { q: '配送先はどこでも対応していますか？', a: '全国対応しています。沖縄・離島もお気軽にご相談ください。' },
];
export default function OrderPage() {
  return (
    <>
      <section className="section pb-0">
        <p className="text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>ORDER</p>
        <h1 className="font-display text-3xl sm:text-4xl" style={{ color: 'var(--fg)' }}>プラン・ご注文</h1>
      </section>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-5 p-8 rounded-sm border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--white)' }}>
            <div>
              <p className="text-xs tracking-[0.15em] mb-2" style={{ color: 'var(--gold)' }}>TEMPLATE PLAN</p>
              <p className="font-display text-3xl" style={{ color: 'var(--fg)' }}>¥9,800</p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>税込・送料込</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              {['あらかじめ用意されたテンプレートを使用','写真の差し込み・名前・日付の変更','修正回数：1回','受付締切：式の3週間前まで','納期：ご注文から約2〜3週間'].map(item => (
                <li key={item} className="flex items-start gap-2"><span style={{ color: 'var(--gold)' }}>—</span>{item}</li>
              ))}
            </ul>
            <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="mt-auto text-center py-3 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>このプランで注文する</a>
          </div>
          <div className="flex flex-col gap-5 p-8 rounded-sm" style={{ backgroundColor: 'var(--cream)' }}>
            <div>
              <p className="text-xs tracking-[0.15em] mb-2" style={{ color: 'var(--gold)' }}>FULL CUSTOM PLAN</p>
              <p className="font-display text-3xl" style={{ color: 'var(--fg)' }}>¥18,000〜</p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>税込・送料込（内容によって変動）</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              {['レイアウト・フォント・構成をゼロから相談','写真枚数・使用素材は自由','修正回数：2回まで無料','受付締切：式の4週間前まで','納期：ご注文から約3〜4週間'].map(item => (
                <li key={item} className="flex items-start gap-2"><span style={{ color: 'var(--gold)' }}>—</span>{item}</li>
              ))}
            </ul>
            <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="mt-auto text-center py-3 text-sm tracking-[0.15em] border transition-opacity hover:opacity-60" style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}>相談してみる</a>
          </div>
        </div>
        <p className="text-xs mt-4 text-center" style={{ color: 'var(--muted)' }}>※ ご希望に応えられない場合はお断りすることがあります。品質を守るための判断です。</p>
      </section>
      <div className="max-w-6xl mx-auto px-6"><div className="h-px" style={{ backgroundColor: 'var(--border)' }} /></div>
      <section className="section">
        <p className="text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>FLOW</p>
        <h2 className="font-display text-2xl mb-10" style={{ color: 'var(--fg)' }}>ご注文の流れ</h2>
        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-6 pb-8 relative">
              {i < steps.length - 1 && <div className="absolute left-4 top-8 w-px h-full" style={{ backgroundColor: 'var(--border)' }} />}
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium z-10" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>{s.num}</div>
              <div className="pt-1">
                <h3 className="text-sm font-medium mb-1" style={{ color: 'var(--fg)' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6"><div className="h-px" style={{ backgroundColor: 'var(--border)' }} /></div>
      <section className="section">
        <p className="text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--gold)' }}>FAQ</p>
        <h2 className="font-display text-2xl mb-8" style={{ color: 'var(--fg)' }}>よくある質問</h2>
        <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
          {faqs.map(faq => (
            <div key={faq.q} className="py-5 flex flex-col gap-2">
              <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>Q. {faq.q}</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0 text-center">
        <a href="https://www.instagram.com/weft_studio" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 text-sm tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--gold)', color: '#fff' }}>Instagram DM でご注文・ご相談</a>
      </section>
    </>
  );
}

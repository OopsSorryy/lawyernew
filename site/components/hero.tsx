'use client';
import { useContent } from '@/lib/i18n';
export default function Hero() {
  const t = useContent();
  return (
    <section className="hero" aria-label={t.hero.ariaLabel}>
      <div className="hero-image" />
      <div className="hero-shade" />
      <p className="hero-lead">{t.hero.lead}</p>
      <div className="hero-copy">
        <h1>
          {t.hero.heading[0]}
          <br />
          <em>{t.hero.heading[1]}</em>
        </h1>
        <p className="hero-since">{t.hero.since}</p>
      </div>
      <div className="hero-bottom-right">
        <div className="hero-stats">
          {t.hero.stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <a className="btn-gold" href="#iletisim">
          {t.hero.primaryCta} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

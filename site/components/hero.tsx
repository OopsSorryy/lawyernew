'use client';
import { ShieldCheck } from 'lucide-react';
import { useContent } from '@/lib/i18n';
export default function Hero() {
  const t = useContent();
  const founder = t.team.members[0];
  return (
    <section className="hero" aria-label={t.hero.ariaLabel}>
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <h1>
            {t.hero.heading[0]}
            <br />
            <em>{t.hero.heading[1]}</em>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <a className="btn-gold" href="#iletisim">
            {t.hero.primaryCta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-photo framed-photo reveal">
          <img src={founder.photo} alt={founder.name} />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-badge reveal">
          <div className="hero-badge-icon">
            <ShieldCheck aria-hidden="true" />
          </div>
          <div>
            <strong>{t.hero.badgeTitle}</strong>
            <span>{t.hero.badgeSubtitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

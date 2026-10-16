'use client';
import { useContent } from '@/lib/i18n';
export default function About() {
  const t = useContent();
  const founder = t.team.members[0];
  return (
    <section className="about section-pad" id="hakkimizda">
      <div className="about-grid reveal">
        <div className="about-frame">
          <img src={founder.photo} alt={founder.name} loading="lazy" />
          <small>{t.about.photoCaption}</small>
        </div>
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 style={{ marginTop: 24 }}>
            {t.about.heading[0]}
            <br />
            <em>{t.about.heading[1]}</em>
          </h2>
          <div className="about-copy" style={{ marginTop: 30 }}>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="text-link" href="#ekip">
              {t.about.ctaLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="about-tagline reveal">
        <p>{t.about.taglineLines[0]}</p>
        <p>{t.about.taglineLines[1]}</p>
      </div>
    </section>
  );
}

'use client';
import { CheckCircle2 } from 'lucide-react';
import { useContent } from '@/lib/i18n';
export default function About() {
  const t = useContent();
  const founder = t.team.members[0];
  return (
    <section className="about section-pad" id="hakkimizda">
      <div className="about-grid reveal">
        <div className="about-photo framed-photo flip">
          <img src={founder.photo} alt={founder.name} loading="lazy" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span className="gold-line" /> {t.about.eyebrow}
          </p>
          <h2>
            {t.about.heading[0]}
            <br />
            {t.about.heading[1]}
          </h2>
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="about-checklist">
            {t.about.checklist.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
          <a className="btn-gold" href="#uzmanlik">
            {t.about.ctaLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

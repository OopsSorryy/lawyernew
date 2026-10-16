'use client';
import { useContent } from '@/lib/i18n';
export default function WhyChoose() {
  const t = useContent();
  const [left, right] = t.whyChoose.columns;
  const portrait = t.team.members[1] ?? t.team.members[0];
  return (
    <section className="why-choose section-pad" id="neden-biz">
      <div className="why-head reveal">
        <p className="eyebrow">{t.whyChoose.eyebrow}</p>
        <h2>
          {t.whyChoose.heading[0]}
          <br />
          <em>{t.whyChoose.heading[1]}</em>
        </h2>
      </div>
      <div className="why-grid reveal">
        <div className="why-col">
          <p className="eyebrow">{left.eyebrow}</p>
          <h3>{left.title}</h3>
          <p>{left.body}</p>
        </div>
        <div className="why-portrait">
          <img src={portrait.photo} alt={portrait.name} loading="lazy" />
        </div>
        <div className="why-col">
          <p className="eyebrow">{right.eyebrow}</p>
          <h3>{right.title}</h3>
          <p>{right.body}</p>
        </div>
      </div>
      <div className="why-values reveal">
        {t.whyChoose.values.map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>
    </section>
  );
}

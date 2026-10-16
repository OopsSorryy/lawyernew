'use client';
import { useContent } from '@/lib/i18n';
const IMAGES = [
  '/team/omer-faruk-askin.jpg',
  '/frames/v3-poster.jpg',
  '/team/gulsum-burcu-ugur.jpg',
];
export default function ApproachShowcase() {
  const t = useContent();
  return (
    <section className="approach-showcase section-pad" id="yaklasim">
      <div className="section-head reveal">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          {t.approach.eyebrow}
        </p>
        <h2>
          {t.approach.heading[0]} <em>{t.approach.heading[1]}</em>
        </h2>
      </div>
      <div className="approach-grid reveal">
        {t.approach.steps.map((step, i) => (
          <article className="approach-card" key={step.n}>
            <img src={IMAGES[i]} alt="" loading="lazy" />
            <div className="approach-card-body">
              <span className="approach-tag">
                {step.n} · {step.title}
              </span>
              <h3>{step.title}</h3>
              <p>{step.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

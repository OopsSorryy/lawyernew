'use client';
import {
  FileText,
  Landmark,
  Globe2,
  Home,
  Gavel,
  Users,
  Building2,
  Briefcase,
} from 'lucide-react';
import { useContent } from '@/lib/i18n';
const ICONS = [FileText, Landmark, Globe2, Home, Gavel, Users, Building2, Briefcase];
export default function Expertise() {
  const t = useContent();
  return (
    <section className="practice section-pad" id="uzmanlik">
      <div className="section-head reveal">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          {t.expertise.eyebrow}
        </p>
        <h2>
          {t.expertise.heading[0]} <em>{t.expertise.heading[1]}</em>
        </h2>
      </div>
      <div className="practice-grid reveal">
        {t.expertise.areas.map(({ title, description }, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <article className="practice-card" key={title}>
              <div className="practice-glyph">
                <span>
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="btn-outline on-dark" href="#iletisim">
                {t.expertise.readMore}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

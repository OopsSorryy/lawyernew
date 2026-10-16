'use client';
import { Building2, Home, Users } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { useContent } from '@/lib/i18n';
const FEATURED_ICONS = [Building2, Home, Users];
export default function Expertise() {
  const t = useContent();
  const featured = [
    t.expertise.areas[6],
    t.expertise.areas[3],
    t.expertise.areas[5],
  ];
  return (
    <section className="expertise section-pad" id="uzmanlik">
      <div className="section-head reveal">
        <div>
          <p className="eyebrow">{t.expertise.eyebrow}</p>
          <h2>
            {t.expertise.heading[0]}
            <br />
            <em>{t.expertise.heading[1]}</em>
          </h2>
        </div>
        <p>{t.expertise.intro}</p>
      </div>
      <div className="expertise-featured reveal">
        {featured.map(({ title, description }, i) => {
          const Icon = FEATURED_ICONS[i];
          return (
            <div className="expertise-card" key={title}>
              <div className="expertise-card-glyph">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
      <Accordion className="expertise-list reveal" multiple>
        {t.expertise.areas.map(({ title, description }, i) => (
          <AccordionItem
            className="expertise-item"
            key={i}
            value={String(i)}
          >
            <AccordionTrigger className="expertise-trigger">
              <span className="expertise-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="expertise-title">{title}</span>
            </AccordionTrigger>
            <AccordionContent className="expertise-description">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

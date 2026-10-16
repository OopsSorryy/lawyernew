'use client';
import { Award, UserRound, FileCheck2 } from 'lucide-react';
import { useContent } from '@/lib/i18n';
const ICONS = [Award, UserRound, FileCheck2];
export default function OurExpertise() {
  const t = useContent();
  const photo = t.team.members[1] ?? t.team.members[0];
  return (
    <section className="our-expertise section-pad">
      <div className="expertise-grid">
        <div className="expertise-copy reveal">
          <p className="eyebrow">
            <span className="gold-line" /> {t.ourExpertise.eyebrow}
          </p>
          <h2>
            {t.ourExpertise.heading[0]}
            <br />
            {t.ourExpertise.heading[1]}
          </h2>
          <div className="expertise-items">
            {t.ourExpertise.items.map(({ title, body }, i) => {
              const Icon = ICONS[i];
              return (
                <div className="expertise-item" key={title}>
                  <div className="expertise-item-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="expertise-photo framed-photo reveal">
          <img src={photo.photo} alt={photo.name} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

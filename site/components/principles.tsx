'use client';
import { useContent } from '@/lib/i18n';
export default function Principles() {
  const t = useContent();
  return (
    <section className="principles section-pad">
      <p className="eyebrow reveal">
        <span className="gold-line" /> {t.principles.eyebrow}
        <span className="gold-line" />
      </p>
      <blockquote className="reveal">
        {t.principles.parts.map((part, i) =>
          part.strong ? (
            <strong key={i}>{part.text}</strong>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </blockquote>
    </section>
  );
}

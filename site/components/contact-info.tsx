'use client';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useContent } from '@/lib/i18n';
export default function ContactInfo() {
  const t = useContent();
  const info = t.contact.info;
  return (
    <section className="contact-info">
      <div className="contact-info-grid reveal">
        <div>
          <p className="contact-info-name">
            {info.officeName.split(' ')[0]}
            <em>{info.officeName.split(' ').slice(1).join(' ')}</em>
          </p>
          <div className="info-label" style={{ marginTop: 30 }}>
            <Clock /> {info.hoursLabel}
          </div>
          <div className="contact-info-hours">
            {info.hours.map((h) => (
              <div key={h}>{h}</div>
            ))}
          </div>
        </div>
        <div className="contact-info-cols">
          <div>
            <div className="info-label">
              <Phone /> {t.contact.form.phone}
            </div>
            <div className="info-people">
              {info.persons.map((p) => (
                <div className="info-block" key={p.phone}>
                  <span className="info-value" style={{ color: 'var(--muted-2)', fontSize: 12 }}>
                    {p.name}
                  </span>
                  <a
                    className="info-value"
                    href={'tel:' + p.phone.replace(/\s/g, '').replace(/^0/, '+90')}
                  >
                    {p.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="info-label">
              <Mail /> {t.contact.form.email}
            </div>
            <div className="info-people">
              {info.persons.map((p) => (
                <div className="info-block" key={p.email}>
                  <a className="info-value" href={'mailto:' + p.email}>
                    {p.email}
                  </a>
                </div>
              ))}
            </div>
            <div className="info-label" style={{ marginTop: 24 }}>
              <MapPin /> {info.officeLabel}
            </div>
            <p className="info-value">
              {info.addressLines[0]}
              <br />
              {info.addressLines[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

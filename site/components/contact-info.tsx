'use client';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useContent } from '@/lib/i18n';
export default function ContactInfo() {
  const t = useContent();
  const info = t.contact.info;
  return (
    <section className="contact-info section-pad">
      <div className="contact-info-grid reveal">
        <div className="contact-info-col">
          <div className="contact-info-icon">
            <MapPin aria-hidden="true" />
          </div>
          <div>
            <h3>{info.officeLabel}</h3>
            <p>
              {info.addressLines[0]}, {info.addressLines[1]}
            </p>
          </div>
        </div>
        <div className="contact-info-col">
          <div className="contact-info-icon">
            <Mail aria-hidden="true" />
          </div>
          <div>
            <h3>{t.contact.form.email}</h3>
            {info.persons.map((p) => (
              <a key={p.email} href={'mailto:' + p.email}>
                {p.email}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-info-col">
          <div className="contact-info-icon">
            <Phone aria-hidden="true" />
          </div>
          <div>
            <h3>{t.contact.form.phone}</h3>
            {info.persons.map((p) => (
              <a
                key={p.phone}
                href={'tel:' + p.phone.replace(/\s/g, '').replace(/^0/, '+90')}
              >
                {p.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

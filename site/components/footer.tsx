'use client';
import { Scale, MapPin, Phone, Mail } from 'lucide-react';
import { useContent } from '@/lib/i18n';
export default function Footer() {
  const t = useContent();
  const info = t.contact.info;
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <a className="footer-brand" href="#" aria-label={t.footer.homeAria}>
            <Scale className="brand-mark" aria-hidden="true" />
            <span>{t.footer.logoAlt}</span>
          </a>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.servicesTitle}</h4>
          <ul>
            {t.footer.services.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer.quickLinksTitle}</h4>
          <ul>
            {t.footer.quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer.findUsTitle}</h4>
          <ul className="footer-find">
            <li>
              <MapPin aria-hidden="true" />
              {info.addressLines[0]}, {info.addressLines[1]}
            </li>
            <li>
              <Phone aria-hidden="true" />
              {info.persons[0]?.phone}
            </li>
            <li>
              <Mail aria-hidden="true" />
              {info.persons[0]?.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

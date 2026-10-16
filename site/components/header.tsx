'use client';
import { useEffect, useState } from 'react';
import { useLanguage, useContent } from '@/lib/i18n';
export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useContent();
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);
  useEffect(() => {
    const scroll = () => {
      document.documentElement.classList.toggle(
        'scrolled',
        window.scrollY > 50,
      );
    };
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  return (
    <div className="header-wrap">
      <header className="site-header">
        <a href="#" className="brand" aria-label={t.header.homeAria}>
          <span>AŞKIN</span>
          <em>HUKUK BÜROSU</em>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? t.header.menuOpen : t.header.menuClosed}
        </button>
        <nav
          id="navigation"
          className={open ? 'nav open' : 'nav'}
          aria-label={t.header.mainMenuAria}
        >
          {t.header.nav.map(({ label, id }) => (
            <a href={'#' + id} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div
            className="lang-switch"
            role="group"
            aria-label={t.header.langLabel}
          >
            <button
              type="button"
              className={lang === 'tr' ? 'lang-flag active' : 'lang-flag'}
              aria-pressed={lang === 'tr'}
              onClick={() => setLang('tr')}
            >
              TR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'lang-flag active' : 'lang-flag'}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <a
            className="nav-contact"
            href="#iletisim"
            onClick={() => setOpen(false)}
          >
            {t.header.contact} <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>
    </div>
  );
}

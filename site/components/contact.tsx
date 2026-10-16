'use client';
import { useState, type SubmitEvent } from 'react';
import { useContent } from '@/lib/i18n';
function fieldValue(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value : '';
}
export default function Contact() {
  const t = useContent();
  const [sent, setSent] = useState(false);
  const recipients = t.contact.info.persons.map((p) => p.email).join(',');
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = fieldValue(data, 'name');
    const email = fieldValue(data, 'email');
    const phone = fieldValue(data, 'phone');
    const issue = fieldValue(data, 'issue');
    const message = fieldValue(data, 'message');
    const subject = `${t.contact.form.submit} — ${issue}`;
    const body = [
      `${t.contact.form.name}: ${name}`,
      `${t.contact.form.email}: ${email}`,
      `${t.contact.form.phone}: ${phone}`,
      `${t.contact.form.issue}: ${issue}`,
      '',
      message,
    ].join('\n');
    const url = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }
  return (
    <section className="contact section-pad" id="iletisim">
      <div className="contact-image" />
      <div className="contact-shade" />
      <div className="contact-inner">
        <div className="contact-head reveal">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            {t.contact.eyebrow}
          </p>
          <h2>
            {t.contact.heading[0]} <em>{t.contact.heading[1]}</em>
          </h2>
          <p style={{ marginTop: 16, color: '#b9b4ac' }}>{t.contact.lead}</p>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">{t.contact.form.phone}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t.contact.form.phonePlaceholder}
              />
            </div>
            <div className="form-field">
              <label htmlFor="issue">{t.contact.form.issue}</label>
              <select id="issue" name="issue" required defaultValue="">
                <option value="" disabled>
                  {t.contact.form.issuePlaceholder}
                </option>
                {t.expertise.areas.map((a) => (
                  <option value={a.title} key={a.title}>
                    {a.title}
                  </option>
                ))}
                <option value={t.contact.form.issueOther}>
                  {t.contact.form.issueOther}
                </option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={t.contact.form.messagePlaceholder}
            />
          </div>
          <button className="btn-gold form-submit" type="submit">
            {t.contact.form.submit} <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">{t.contact.form.note}</p>
          {sent && <output className="form-status">✓</output>}
        </form>
      </div>
    </section>
  );
}

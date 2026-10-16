'use client';
import { Mail, Phone } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { useContent } from '@/lib/i18n';
export default function Team() {
  const t = useContent();
  const persons = t.contact.info.persons;
  return (
    <div className="team-grid">
      {t.team.members.map((m, i) => (
        <Dialog key={i}>
          <div className="team-card reveal">
            <div className="team-portrait">
              <img src={m.photo} alt={m.name} loading="lazy" />
              <div className="team-contact-bar">
                <a
                  href={'mailto:' + persons[i]?.email}
                  aria-label={persons[i]?.email}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>
                    <Mail aria-hidden="true" />
                  </span>
                </a>
                <a
                  href={
                    'tel:' +
                    (persons[i]?.phone ?? '').replace(/\s/g, '').replace(/^0/, '+90')
                  }
                  aria-label={persons[i]?.phone}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>
                    <Phone aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
            <DialogTrigger className="team-info">
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
            </DialogTrigger>
          </div>
          <DialogContent className="article-dialog" showCloseButton={false}>
            <DialogClose className="article-close" aria-label={t.common.close}>
              {t.common.close}
            </DialogClose>
            <span className="eyebrow">{m.role.toUpperCase()}</span>
            <DialogTitle>{m.name}</DialogTitle>
            <DialogDescription>{m.intro}</DialogDescription>
            <div className="article-body">
              {m.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

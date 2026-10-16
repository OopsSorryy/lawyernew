'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Expertise from '@/components/expertise';
import Team from '@/components/team';
import WhyChoose from '@/components/why-choose';
import Principles from '@/components/principles';
import Publications from '@/components/publications';
import Contact from '@/components/contact';
import ContactInfo from '@/components/contact-info';
import Footer from '@/components/footer';
import Reveals from '@/components/reveals';
import { useContent } from '@/lib/i18n';
export default function Home() {
  const t = useContent();
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <section className="team section-pad" id="ekip">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">{t.team.eyebrow}</p>
              <h2>
                {t.team.heading[0]}
                <br />
                <em>{t.team.heading[1]}</em>
              </h2>
            </div>
          </div>
          <Team />
        </section>
        <WhyChoose />
        <Principles />
        <Publications />
        <Contact />
        <ContactInfo />
      </main>
      <Footer />
      <Reveals />
    </>
  );
}

'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Expertise from '@/components/expertise';
import OurExpertise from '@/components/our-expertise';
import ApproachShowcase from '@/components/approach-showcase';
import Team from '@/components/team';
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
        <OurExpertise />
        <ApproachShowcase />
        <section className="team section-pad" id="ekip">
          <div className="section-head reveal">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              {t.team.eyebrow}
            </p>
            <h2>
              {t.team.heading[0]} <em>{t.team.heading[1]}</em>
            </h2>
          </div>
          <Team />
        </section>
        <ContactInfo />
        <Contact />
        <Publications />
      </main>
      <Footer />
      <Reveals />
    </>
  );
}

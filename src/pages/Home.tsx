import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Experience />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Projects />
      </AnimatedSection>
    </PageTransition>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InterestGrid from './components/InterestGrid';
import ProjectsSection from './components/ProjectsSection';
import TimelineSection from './components/TimelineSection';
import EducationSection from './components/EducationSection';
import CVSection from './components/CVSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <InterestGrid />
        <ProjectsSection />
        <TimelineSection />
        <EducationSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

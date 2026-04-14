import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projeler } from '../data/content';

export default function ProjectsSection() {
  return (
    <section id="projeler">
      <div className="container">
        <SectionHeader etiket="Projeler" baslik="Seçili Projeler" />
        <div className="projects-grid">
          {projeler.map((proje) => (
            <ProjectCard key={proje.baslik} proje={proje} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from 'lucide-react';
import type { Proje } from '../data/content';

interface ProjectCardProps {
  proje: Proje;
}

export default function ProjectCard({ proje }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <div className="project-card__title-group">
          <h3 className="project-card__title">{proje.baslik}</h3>
          {proje.rozet && (
            <span className="project-card__badge">{proje.rozet}</span>
          )}
        </div>
        <a
          href={proje.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
          aria-label={`${proje.baslik} — GitHub`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
      <p className="project-card__desc">{proje.aciklama}</p>
      <div className="project-card__tags">
        {proje.teknolojiler.map((tek) => (
          <span className="project-card__tag" key={tek}>
            {tek}
          </span>
        ))}
      </div>
    </div>
  );
}

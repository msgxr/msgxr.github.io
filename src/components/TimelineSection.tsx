import SectionHeader from './SectionHeader';
import { deneyimler } from '../data/content';

export default function TimelineSection() {
  return (
    <section id="deneyim">
      <div className="container">
        <SectionHeader etiket="Deneyim" baslik="Liderlik & Topluluk" />
        <div className="timeline">
          {deneyimler.map((deneyim) => (
            <div className="timeline-item" key={deneyim.baslik}>
              <div className="timeline-item__header">
                <div>
                  <h3 className="timeline-item__title">{deneyim.baslik}</h3>
                  <p className="timeline-item__subtitle">{deneyim.altBaslik}</p>
                </div>
                <span className="timeline-item__date">{deneyim.tarih}</span>
              </div>
              <ul className="timeline-item__list">
                {deneyim.maddeler.map((madde, i) => (
                  <li key={i}>{madde}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

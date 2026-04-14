import SectionHeader from './SectionHeader';
import { egitim, sertifikalar } from '../data/content';

export default function EducationSection() {
  return (
    <section id="egitim">
      <div className="container">
        <SectionHeader etiket="Eğitim & Sertifikalar" baslik="Akademik Geçmiş" />
        <div className="education-grid">
          {egitim.map((e) => (
            <div className="education-card" key={e.kurum}>
              <div className="education-card__header">
                <div>
                  <h3 className="education-card__title">{e.kurum}</h3>
                  <p className="education-card__subtitle">{e.bolum}</p>
                </div>
                <span className="education-card__date">{e.tarih}</span>
              </div>
              {e.detay && <p className="education-card__detail">{e.detay}</p>}
            </div>
          ))}

          {sertifikalar.length > 0 && (
            <div className="education-card">
              <h3 className="education-card__title">Sertifikalar</h3>
              <div className="cert-list">
                {sertifikalar.map((s) => (
                  <div className="cert-item" key={s.ad}>
                    <span className="cert-item__name">{s.ad}</span>
                    <span className="cert-item__year">{s.yil}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

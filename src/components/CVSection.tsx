import { Download } from 'lucide-react';
import { kisiselBilgiler } from '../data/content';

export default function CVSection() {
  return (
    <section id="cv" className="cv-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Özgeçmiş</h2>
        <p className="cv-section__text">
          Güncel özgeçmişimi aşağıdan indirebilirsiniz.
        </p>
        <a href={kisiselBilgiler.cvDosya} className="btn btn--primary" download>
          <Download size={16} />
          CV İndir (PDF)
        </a>
        <p className="cv-section__date">Son güncelleme: Nisan 2026</p>
      </div>
    </section>
  );
}

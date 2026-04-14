import { ArrowRight, Download, Mail } from 'lucide-react';
import { kisiselBilgiler } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1 className="hero__name">{kisiselBilgiler.ad}</h1>
        <p className="hero__title">{kisiselBilgiler.unvan}</p>
        <p className="hero__summary">{kisiselBilgiler.ozet}</p>
        <div className="hero__actions">
          <a href="#projeler" className="btn btn--primary">
            <ArrowRight size={16} />
            Projeleri İncele
          </a>
          <a href={kisiselBilgiler.cvDosya} className="btn btn--secondary" download>
            <Download size={16} />
            CV İndir
          </a>
          <a href="#iletisim" className="btn btn--ghost">
            <Mail size={16} />
            İletişim
          </a>
        </div>
      </div>
    </section>
  );
}

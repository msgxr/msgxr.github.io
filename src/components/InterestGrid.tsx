import { Brain, Lock, Shield, Calculator, Cpu, Database } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ilgiAlanlari } from '../data/content';
import type { LucideIcon } from 'lucide-react';

const ikonHaritasi: Record<string, LucideIcon> = {
  Brain,
  Lock,
  Shield,
  Calculator,
  Cpu,
  Database,
};

export default function InterestGrid() {
  return (
    <section id="arastirma">
      <div className="container">
        <SectionHeader etiket="Araştırma Alanları" baslik="İlgi ve Çalışma Alanları" />
        <div className="interest-grid">
          {ilgiAlanlari.map((alan) => {
            const Ikon = ikonHaritasi[alan.ikon];
            return (
              <div className="interest-card" key={alan.baslik}>
                <div className="interest-card__icon">
                  {Ikon && <Ikon size={20} />}
                </div>
                <h3 className="interest-card__title">{alan.baslik}</h3>
                <p className="interest-card__desc">{alan.aciklama}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

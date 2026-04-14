import SectionHeader from './SectionHeader';
import { hakkimdaMetni } from '../data/content';

export default function AboutSection() {
  return (
    <section id="hakkimda">
      <div className="container">
        <SectionHeader etiket="Hakkımda" baslik="Genel Bakış" />
        <div className="about__text">
          {hakkimdaMetni.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { kisiselBilgiler, navigasyon } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          © 2026 {kisiselBilgiler.ad}. Tüm hakları saklıdır.
        </p>
        <nav className="footer__links" aria-label="Alt bilgi bağlantıları">
          {navigasyon.slice(0, 3).map((oge) => (
            <a href={oge.hedef} className="footer__link" key={oge.hedef}>
              {oge.etiket}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

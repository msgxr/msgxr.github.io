import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigasyon, kisiselBilgiler } from '../data/content';

export default function Navbar() {
  const [kaydirilda, setKaydirilda] = useState(false);
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    const dinleyici = () => {
      setKaydirilda(window.scrollY > 20);
    };
    window.addEventListener('scroll', dinleyici, { passive: true });
    return () => window.removeEventListener('scroll', dinleyici);
  }, []);

  const menuKapat = () => setMenuAcik(false);

  return (
    <nav className={`navbar ${kaydirilda ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Ana navigasyon">
      <div className="navbar__inner">
        <a href="#" className="navbar__name" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {kisiselBilgiler.ad}
        </a>

        <ul className="navbar__links">
          {navigasyon.map((oge) => (
            <li key={oge.hedef}>
              <a href={oge.hedef} className="navbar__link">
                {oge.etiket}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${menuAcik ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuAcik(!menuAcik)}
          aria-label={menuAcik ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuAcik}
        >
          {menuAcik ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar__mobile ${menuAcik ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navigasyon.map((oge) => (
            <li key={oge.hedef}>
              <a href={oge.hedef} className="navbar__mobile-link" onClick={menuKapat}>
                {oge.etiket}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

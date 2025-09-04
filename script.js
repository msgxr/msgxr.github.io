
// Gelişmiş Hamburger Menü
(function initHamburgerMenu() {
  const menu  = document.querySelector(".menu-links");
  const icon  = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;

  // ARIA
  icon.setAttribute("aria-controls", "primary-menu");
  menu.id = menu.id || "primary-menu";
  icon.setAttribute("aria-expanded", "false");
  icon.setAttribute("aria-label", "Menu");

  // Odak yönetimi için menü içi odaklanabilirler
  const focusablesSelector = 'a, button, [tabindex]:not([tabindex="-1"])';

  function openMenu() {
    menu.classList.add("open");
    icon.classList.add("open");
    icon.setAttribute("aria-expanded", "true");

    // İlk odak
    const first = menu.querySelector(focusablesSelector);
    first && first.focus();

    // Dışarı tıkla kapat
    document.addEventListener("click", onDocClick, { capture: true });
    // ESC ile kapat
    document.addEventListener("keydown", onEsc);
  }

  function closeMenu() {
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", "false");

    document.removeEventListener("click", onDocClick, { capture: true });
    document.removeEventListener("keydown", onEsc);
    // İkonu geri odakla
    icon.focus();
  }

  function toggleMenu() {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  }

  function onDocClick(e) {
    // Menü ve ikon dışı tıklamada kapat
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
      closeMenu();
    }
  }

  function onEsc(e) {
    if (e.key === "Escape") closeMenu();
    // Basit odak tuzağı (Shift+Tab / Tab)
    if (e.key === "Tab" && menu.classList.contains("open")) {
      const items = [...menu.querySelectorAll(focusablesSelector)];
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  }

  // Tetikleyici
  icon.addEventListener("click", toggleMenu);
  icon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMenu(); }
  });

  // Pencere boyutu büyürse (desktop) menüyü resetle
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener?.("change", () => { if (mq.matches) closeMenu(); });
})();

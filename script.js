/* ============================================
   SCRIPT.JS — Portfolio Interactivity
   Muhammed Sina Gün | msgxr.github.io
   ============================================ */

// ─── THEME TOGGLE ─────────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    themeIcon.className = 'fa-solid fa-moon';
  } else {
    themeIcon.className = 'fa-solid fa-sun';
  }
}

// Load saved preference
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ─── HAMBURGER MENU ────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ─── NAVBAR SCROLL EFFECT ──────────────────────
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current > 80) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  // Hide on scroll down, show on scroll up
  if (current > lastScroll && current > 300) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = Math.max(current, 0);
});

// ─── TYPED TEXT ANIMATION ─────────────────────
const typedTexts = [
  'Backend Geliştirici',
  'Yapay Zeka Uzmanı',
  'Otomasyon Mühendisi',
  'Veri Hattı Mimarı'
];

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeWriter() {
  if (!typedEl) return;
  const currentText = typedTexts[typedIndex];

  if (isDeleting) {
    typedEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex = (typedIndex + 1) % typedTexts.length;
    speed = 400;
  }

  setTimeout(typeWriter, speed);
}

typeWriter();

// ─── SCROLL REVEAL (Intersection Observer) ─────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for children in the same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

reveals.forEach((el) => revealObserver.observe(el));

// ─── ACTIVE NAV LINK ON SCROLL ──────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active-nav');
          } else {
            link.classList.remove('active-nav');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

// ─── CONTACT FORM — Netlify Function ──────────
async function handleContactForm(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('submit-text');
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    showFormStatus('Lütfen tüm alanları doldurun.', 'error');
    return;
  }

  // Loading state
  btn.disabled = true;
  btnText.textContent = 'Gönderiliyor...';
  btn.style.opacity = '0.7';

  try {
    const res = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      showFormStatus('✅ Mesajınız gönderildi! En kısa sürede dönüş yapacağım.', 'success');
      e.target.reset();
    } else {
      showFormStatus('❌ ' + (data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.'), 'error');
    }
  } catch (err) {
    showFormStatus('❌ Bağlantı hatası. Lütfen tekrar deneyin.', 'error');
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Mesaj Gönder';
    btn.style.opacity = '1';
  }
}

function showFormStatus(msg, type) {
  const status = document.getElementById('form-status');
  status.textContent = msg;
  status.className = `form-status ${type}`;
  setTimeout(() => { status.className = 'form-status'; }, 6000);
}

// ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80; // Navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── ACTIVE NAV STYLE ───────────────────────────
const style = document.createElement('style');
style.textContent = `
  .nav-link.active-nav {
    color: var(--accent-primary) !important;
  }
  .nav-link.active-nav::after {
    width: 100% !important;
  }
  #navbar {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;
document.head.appendChild(style);

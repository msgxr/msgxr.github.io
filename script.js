// === Yardımcı Fonksiyonlar ===
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// Tema kalıcılığı ve değiştirme
(function themeInit() {
  const storeKey = 'theme';
  const saved = localStorage.getItem(storeKey);
  
  if (saved === 'light') document.documentElement.classList.add('light');
  if (saved === 'dark') document.documentElement.classList.add('dark');
  
  const btn = $("#themeToggle");
  
  const setIcon = () => {
    btn.innerHTML = document.documentElement.classList.contains('dark')
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  };
  
  setIcon();
  
  btn.addEventListener('click', () => {
    const doc = document.documentElement;
    
    if (doc.classList.contains('dark')) {
      doc.classList.remove('dark');
      doc.classList.add('light');
      localStorage.setItem(storeKey, 'light');
    } else if (doc.classList.contains('light')) {
      doc.classList.remove('light');
      doc.classList.add('dark');
      localStorage.setItem(storeKey, 'dark');
    } else {
      // İlk kez tıklanıyor, sistem temasının tersini uygula
      doc.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark');
      localStorage.setItem(storeKey, doc.classList.contains('dark') ? 'dark' : 'light');
    }
    
    setIcon();
  });
})();

// Mobil menü (basit dropdown)
(function mobileMenu() {
  const btn = $("#menuBtn");
  const links = $("#navLinks");
  
  btn?.addEventListener('click', () => {
    if (links.style.display === 'flex') {
      // Menüyü kapat
      links.style.display = '';
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      // Menüyü aç
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.right = '1rem';
      links.style.top = '64px';
      links.style.background = 'var(--card)';
      links.style.border = '1px solid var(--border)';
      links.style.borderRadius = '12px';
      links.style.padding = '.6rem';
      btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });
  
  // Menü dışına tıklanınca kapat
  document.addEventListener('click', e => {
    if (!links.contains(e.target) && !btn.contains(e.target)) {
      links.style.display = '';
      btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
})();

// Scroll ilerleme çubuğu ve yukarı çık butonu
(function scrollUI() {
  const bar = $("#progress");
  const toTop = $("#toTop");
  
  const onScroll = () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct.toFixed(1) + '%';
    
    // Yukarı çık butonunu göster/gizle
    if (h.scrollTop > 400) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
    
    // Scroll-spy: aktif menü öğesini güncelle
    const sections = [...$$('main[id], section[id]')];
    let current = 'home';
    
    sections.forEach(s => {
      if (scrollY >= s.offsetTop - 120) {
        current = s.id;
      }
    });
    
    $$('#navLinks a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  
  document.addEventListener('scroll', onScroll, { passive: true });
  
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Sayfa yüklendiğinde de çalıştır
  onScroll();
})();

// Sayı sayaçları animasyonu
(function counters() {
  const nums = $$('.num');
  
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target;
      const target = parseFloat(el.dataset.target) || 0;
      let val = 0;
      const step = target > 10 ? Math.max(1, Math.ceil(target / 80)) : 0.01;
      
      const tick = () => {
        val += step;
        
        if (val >= target) {
          el.textContent = target % 1 === 0 ? target : target.toFixed(2);
        } else {
          el.textContent = val % 1 === 0 ? Math.floor(val) : val.toFixed(2);
          requestAnimationFrame(tick);
        }
      };
      
      tick();
      io.unobserve(el);
    });
  }, { threshold: .4 });
  
  nums.forEach(n => io.observe(n));
})();

// Yazı makinesi efekti
(function typing() {
  const el = $("#typing");
  
  const items = [
    "Kod yazarak geleceği inşa ediyorum 🚀",
    "AI ile sınırları aşıyorum 🤖", 
    "Güvenli ve ölçeklenebilir sistemler kuruyorum 🛡️",
    "Full-stack çözümler üretirim 💻",
    "Bulutta sürdürülebilir mimariler ☁️",
    "BIST'te profesyonel deneyim kazandım 📈",
    "3.03 not ortalaması ile başarılı öğrenciyim 🎓"
  ];
  
  let i = 0;
  let j = 0;
  let del = false;
  let wait = 0;
  
  const type = () => {
    if (wait > 0) {
      wait--;
      return setTimeout(type, 30);
    }
    
    const t = items[i];
    j += del ? -1 : 1;
    el.textContent = t.slice(0, j);
    
    if (!del && j === t.length) {
      del = true;
      wait = 70;
    }
    
    if (del && j === 0) {
      del = false;
      i = (i + 1) % items.length;
      wait = 20;
    }
    
    setTimeout(type, del ? 18 : 36);
  };
  
  type();
})();

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Intersection Observer for fade-in animations
(function fadeInAnimation() {
  const cards = $$('.card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
})();

// ============================================
// İÇERİK VERİSİ — Tüm site içeriği
// Muhammed Sina Gün
// ============================================

export interface Proje {
  baslik: string;
  aciklama: string;
  teknolojiler: string[];
  githubUrl: string;
  oneCikan?: boolean;
  rozet?: string;
}

export interface IlgiAlani {
  baslik: string;
  aciklama: string;
  ikon: string;
}

export interface Deneyim {
  baslik: string;
  altBaslik: string;
  tarih: string;
  maddeler: string[];
}

export interface Egitim {
  kurum: string;
  bolum: string;
  tarih: string;
  detay?: string;
}

export interface Sertifika {
  ad: string;
  yil: string;
}

// ─── Kişisel Bilgiler ──────────────────────────
export const kisiselBilgiler = {
  ad: 'Muhammed Sina Gün',
  unvan: 'Bilgisayar Mühendisliği Öğrencisi',
  ozet:
    'İstanbul Arel Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirme ve yapay zeka alanlarında uzmanlaşmayı hedefliyor, analitik düşünme ve problem çözme odaklı projeler geliştiriyorum. Python, C, C++, C# ve Java dillerinde yetkin olup, yapay zeka tabanlı yenilikçi çözümler üretmeye odaklanıyorum.',
  email: 'muhammedsina47@outlook.com',
  github: 'https://github.com/msgxr',
  githubKullaniciAdi: 'msgxr',
  linkedin: 'https://www.linkedin.com/in/muhammedsina',
  linkedinKullaniciAdi: 'muhammedsina',
  cvDosya: '/muhammedsinagun_cv_tr.pdf',
  konum: 'İstanbul, Türkiye',
  orcid: 'https://orcid.org/0009-0008-9328-4044',
};

// ─── Hakkımda ──────────────────────────────────
export const hakkimdaMetni = [
  'Bilgisayar mühendisliği alanında lisans eğitimimi sürdürürken, yazılım geliştirme süreçlerine sistematik ve mühendislik odaklı bir yaklaşım benimsiyorum. Projelerimde temiz kod prensipleri, katmanlı mimari ve test edilebilirlik ön plandadır.',
  'Akademik çalışmalarımı yapay zeka, kriptografi, genomik veri analizi ve sayısal yöntemler gibi alanlarda derinleştirirken; endüstriyel projelerde veri hatları, otomasyon çözümleri ve kurumsal yazılım sistemleri geliştirdim. Borsa İstanbul Ar-Ge biriminde staj deneyimim bulunmaktadır.',
  'Teknik bilgi birikimimi topluluk çalışmalarıyla pekiştiriyorum. Arel Üniversitesi Yazılım Kulübü genel koordinatörü olarak atölyeler düzenliyor, T3 Vakfı bünyesinde gönüllü eğitmenlik yaparak bilgi paylaşımına katkıda bulunuyorum.',
];

// ─── İlgi & Araştırma Alanları ─────────────────
export const ilgiAlanlari: IlgiAlani[] = [
  {
    baslik: 'Yapay Zeka & XAI',
    aciklama: 'Derin öğrenme, açıklanabilir yapay zeka, GNN tabanlı genomik analiz ve klinik karar destek sistemleri.',
    ikon: 'Brain',
  },
  {
    baslik: 'Kriptografi',
    aciklama: 'Şifreleme algoritmaları, güvenli iletişim protokolleri ve geometrik şifreleme tasarımı.',
    ikon: 'Lock',
  },
  {
    baslik: 'Siber Güvenlik',
    aciklama: 'Saldırı vektörleri, savunma mekanizmaları ve güvenlik denetimi.',
    ikon: 'Shield',
  },
  {
    baslik: 'Numerik Analiz',
    aciklama: 'Sayısal yöntemler, hesaplamalı matematik ve nümerik optimizasyon.',
    ikon: 'Calculator',
  },
  {
    baslik: 'Gömülü Sistemler',
    aciklama: 'Donanım-yazılım entegrasyonu ve düşük seviye programlama.',
    ikon: 'Cpu',
  },
  {
    baslik: 'Veri Mühendisliği',
    aciklama: 'ETL veri hatları, veritabanı tasarımı ve otomasyon süreçleri.',
    ikon: 'Database',
  },
];

// ─── Projeler ──────────────────────────────────
export const projeler: Proje[] = [
  {
    baslik: 'VARIANT-GNN',
    aciklama:
      'Genomik varyant patojenite tahmini için hibrit GNN, XGBoost ve DNN tabanlı açıklanabilir yapay zeka sistemi. TEKNOFEST 2026 Yapay Zeka kategorisinde geliştirilen bu proje, Graph Neural Network mimarisi kullanarak genetik varyantların patojenite sınıflandırmasını gerçekleştirmektedir.',
    teknolojiler: ['Python', 'PyTorch', 'GNN', 'XGBoost', 'DNN', 'XAI'],
    githubUrl: 'https://github.com/msgxr/VARIANT-GNN',
    oneCikan: true,
    rozet: 'TEKNOFEST 2026',
  },
  {
    baslik: 'AI-Driven Requirements Analyst',
    aciklama:
      'Doğal dil taleplerini BDD (Behavior-Driven Development) formatında yazılım gereksinimlerine dönüştüren çoklu ajan mimarili platform. FastAPI ve PostgreSQL altyapısıyla geliştirilmiştir.',
    teknolojiler: ['TypeScript', 'FastAPI', 'PostgreSQL', 'Multi-Agent AI'],
    githubUrl: 'https://github.com/msgxr/decision-engine',
  },
  {
    baslik: 'KOBİ Kalkanı',
    aciklama:
      'Küçük ve orta ölçekli işletmeler için siber güvenlik tarama ve KVKK uyumluluk platformu. Otomatik güvenlik denetimi ve raporlama altyapısı sunmaktadır.',
    teknolojiler: ['JavaScript', 'Node.js', 'Güvenlik Tarama'],
    githubUrl: 'https://github.com/msgxr/Kobi-Kalkani',
  },
  {
    baslik: 'XAI-GYN Klinik Karar Destek Sistemi',
    aciklama:
      'Jinekolojik tıbbi görüntüleri derin öğrenmeyle analiz eden açıklanabilir yapay zeka tabanlı klinik karar destek sistemi. SHAP değerleri üzerinden modelin tahmin gerekçelerini hekimlere görsel biçimde sunan bir arayüz içermektedir.',
    teknolojiler: ['Python', 'TensorFlow', 'XAI / SHAP', 'Computer Vision', 'Streamlit'],
    githubUrl: 'https://github.com/msgxr/-XAI-GYN',
  },
  {
    baslik: 'BIST Excel Veri Uygulaması',
    aciklama:
      'Modern ve güçlü Excel benzeri veri görselleştirme ve elektronik tablo uygulaması. Formüller, grafikler ve gelişmiş analiz özellikleri sunmaktadır.',
    teknolojiler: ['JavaScript', 'Veri Görselleştirme', 'Excel API'],
    githubUrl: 'https://github.com/msgxr/bist-excel-app',
  },
  {
    baslik: 'Stok Yönetim Sistemi',
    aciklama:
      'SOLID prensipleriyle sıfırdan tasarlanan çok katmanlı kurumsal stok takip sistemi. Rol tabanlı erişim kontrolü ile farklı yetki seviyelerinde işlem yapılabilmektedir.',
    teknolojiler: ['Java', 'MySQL', 'SOLID', 'OOP'],
    githubUrl: 'https://github.com/msgxr/inventory-management-system',
  },
  {
    baslik: 'WinOps Bakım Aracı',
    aciklama:
      'Windows için CMD tabanlı bakım ve onarım menü aracı. Hem kurumsal hem bireysel kullanıcılar için sistem bakımı otomasyonu sağlamaktadır.',
    teknolojiler: ['Batchfile', 'Windows', 'Otomasyon'],
    githubUrl: 'https://github.com/msgxr/winops-maintenance',
  },
];

// ─── Deneyim ───────────────────────────────────
export const deneyimler: Deneyim[] = [
  {
    baslik: 'Borsa İstanbul A.Ş.',
    altBaslik: 'Yaz Stajyeri — Ar-Ge Birimi',
    tarih: 'Ağustos 2025 — Eylül 2025',
    maddeler: [
      'Ar-Ge biriminde yazılım geliştirme süreçlerine katkıda bulunuldu.',
      'Finansal veri sistemleri ve kurumsal yazılım altyapıları üzerine deneyim kazanıldı.',
    ],
  },
  {
    baslik: 'Arel Üniversitesi Yazılım Kulübü',
    altBaslik: 'Genel Koordinatör',
    tarih: 'Ocak 2026 — Devam Ediyor',
    maddeler: [
      'İdari ve teknik faaliyet koordinasyonu yürütülmektedir.',
      'Milli teknoloji vizyonuyla mühendis yetiştirme odaklı çalışmalar gerçekleştirilmektedir.',
      '30+ üyeye Big-O Analizi, Bilgisayar Mimarisi ve Siber Güvenlik atölyeleri düzenlendi.',
    ],
  },
  {
    baslik: 'T3 Vakfı',
    altBaslik: 'Gönüllü Eğitmen',
    tarih: 'Ağustos 2025 — Devam Ediyor',
    maddeler: [
      'Gençlere yönelik teknoloji ve mühendislik eğitimleri verilmektedir.',
      'Milli Teknoloji Hamlesi kapsamında bilgi paylaşımı desteklenmektedir.',
    ],
  },
];

// ─── Eğitim ────────────────────────────────────
export const egitim: Egitim[] = [
  {
    kurum: 'İstanbul Arel Üniversitesi',
    bolum: 'Bilgisayar Mühendisliği (Lisans)',
    tarih: '2024 — 2028 (Beklenen)',
    detay: 'GANO: 3.16 / 4.00',
  },
  {
    kurum: 'Anadolu Üniversitesi',
    bolum: 'Yönetim Bilişim Sistemleri (Lisans)',
    tarih: '2024 — 2028 (Beklenen)',
  },
];

// ─── Sertifikalar ──────────────────────────────
export const sertifikalar: Sertifika[] = [
  { ad: 'SHGM İHA-1 İnsansız Hava Aracı Pilot Lisansı', yil: '2025' },
  { ad: 'LinkedIn Programlama Esasları', yil: '2024' },
  { ad: 'Cisco Siber Güvenlik Temelleri', yil: '2024' },
  { ad: 'Python için Programlama Kavramları', yil: '2023' },
];

// ─── Navigasyon ────────────────────────────────
export const navigasyon = [
  { etiket: 'Hakkımda', hedef: '#hakkimda' },
  { etiket: 'Araştırma', hedef: '#arastirma' },
  { etiket: 'Projeler', hedef: '#projeler' },
  { etiket: 'Deneyim', hedef: '#deneyim' },
  { etiket: 'Eğitim', hedef: '#egitim' },
  { etiket: 'İletişim', hedef: '#iletisim' },
];

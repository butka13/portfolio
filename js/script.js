/* ==========================================================================
   Portfolio content.
   Add / edit works here. Assets are pre-optimized in:
     assets/thumb/<name>.jpg   — gallery card (long edge 900px)
     assets/full/<name>.jpg    — lightbox image (long edge 1600px)
     assets/video/<name>.mp4   — video clip
     assets/poster/<name>.jpg  — video poster frame
   Original full-res files stay in /images and /video.
   ========================================================================== */

const WORKS = [
  /* ---------- Featured commercial ---------- */
  {
    name: "fashion-ad", cat: "fashion", type: "video",
    title_en: "Clothing-store ad — full spot",
    title_ru: "Рекламный ролик для магазина одежды",
    desc_en: "A 27s AI ad: hook, three outfit changes in one wardrobe, and a call to action. No studio, no model, no shoot day.",
    desc_ru: "27-секундная AI-реклама: хук, три смены образа в одной гардеробной и призыв к действию. Без студии, модели и съёмочного дня."
  },

  /* ---------- Animated object characters (video) ---------- */
  {
    name: "char-fork", cat: "character", type: "video",
    title_en: "The Hungry Fork",
    title_ru: "Голодная вилка",
    desc_en: "Pixar-style 3D character with full facial acting and motion — a kitchen object brought to life.",
    desc_ru: "3D-персонаж в стиле Pixar с полноценной мимикой и движением — кухонный предмет оживает."
  },
  {
    name: "char-sock", cat: "character", type: "video",
    title_en: "Sock vs. Washing Machine",
    title_ru: "Носок против стиралки",
    desc_en: "Character consistency and expressive motion for a short, loopable social clip.",
    desc_ru: "Консистентность персонажа и выразительное движение для короткого зацикленного клипа."
  },
  {
    name: "char-slippers", cat: "character", type: "video",
    title_en: "Tired Slippers",
    title_ru: "Уставшие тапочки",
    desc_en: "Two characters, shared emotion, one cozy hallway scene.",
    desc_ru: "Два персонажа, общая эмоция, одна уютная сцена в прихожей."
  },
  {
    name: "char-powerstrip", cat: "character", type: "video",
    title_en: "Overloaded Power Strip",
    title_ru: "Перегруженный удлинитель",
    desc_en: "A relatable everyday object turned into a comedic hero — perfect branded-content material.",
    desc_ru: "Бытовой предмет превращается в комедийного героя — идеальный материал для брендового контента."
  },

  /* ---------- Animated object characters (image) ---------- */
  {
    name: "char-vacuum", cat: "character", type: "image",
    title_en: "Buff Vacuum",
    title_ru: "Пылесос-качок",
    desc_en: "Dynamic pose and personality — a mascot-ready character concept.",
    desc_ru: "Динамичная поза и характер — концепт персонажа, готовый стать маскотом."
  },
  {
    name: "char-perfume", cat: "character", type: "image",
    title_en: "Perfume with Attitude",
    title_ru: "Флакон с характером",
    desc_en: "Elegant product-meets-character concept — a bridge between branding and storytelling.",
    desc_ru: "Элегантный концепт «продукт-персонаж» — мост между брендингом и сторителлингом."
  },
  {
    name: "char-fridge", cat: "character", type: "image",
    title_en: "The Empty Fridge",
    title_ru: "Пустой холодильник",
    desc_en: "Pixar-style 3D still — warm cinematic lighting and precise facial emotion.",
    desc_ru: "3D-кадр в стиле Pixar — тёплый кинематографичный свет и точная эмоция лица."
  },
  {
    name: "char-lightbulb", cat: "character", type: "image",
    title_en: "The Sad Bulb",
    title_ru: "Грустная лампочка",
    desc_en: "Minimal scene, maximum emotion — mood built with light alone.",
    desc_ru: "Минимум сцены, максимум эмоции — настроение, построенное одним светом."
  },

  /* ---------- AI fashion photography (image) — Kazakhstan location shoots ---------- */
  {
    name: "fashion-charyn", cat: "fashion", type: "image",
    title_en: "Charyn Canyon",
    title_ru: "Чарынский каньон",
    desc_en: "Photoreal AI model on location — consistent face, golden-hour light, real garments.",
    desc_ru: "Фотореалистичная AI-модель на локации — консистентное лицо, золотой час, реальная одежда."
  },
  {
    name: "fashion-medeu", cat: "fashion", type: "image",
    title_en: "Medeu Ice Rink",
    title_ru: "Каток Медеу",
    desc_en: "Winter editorial in the Almaty mountains — coat styling with depth and atmosphere.",
    desc_ru: "Зимний эдиториал в горах Алматы — образ с пальто, глубиной и атмосферой."
  },
  {
    name: "fashion-coffee", cat: "fashion", type: "image",
    title_en: "Coffee Brand UGC",
    title_ru: "UGC для кофейни",
    desc_en: "Branded lifestyle shot with product in hand — ready-made UGC ad content.",
    desc_ru: "Брендовый lifestyle-кадр с продуктом в руке — готовый UGC-контент для рекламы."
  },
  {
    name: "fashion-expo", cat: "fashion", type: "image",
    title_en: "Astana — Expo Sphere",
    title_ru: "Астана — сфера Expo",
    desc_en: "Streetwear look against a landmark — urban campaign energy.",
    desc_ru: "Streetwear-образ на фоне достопримечательности — энергия городской кампании."
  },
  {
    name: "fashion-baiterek", cat: "fashion", type: "image",
    title_en: "Astana — Baiterek",
    title_ru: "Астана — Байтерек",
    desc_en: "Summer dress and soft daylight — a warm, catalog-ready lifestyle frame.",
    desc_ru: "Летнее платье и мягкий дневной свет — тёплый lifestyle-кадр для каталога."
  },
  {
    name: "fashion-floral", cat: "fashion", type: "image",
    title_en: "Studio — Floral Dress",
    title_ru: "Студия — цветочное платье",
    desc_en: "Clean studio product shot on white — every SKU, no photographer.",
    desc_ru: "Чистый студийный кадр на белом — под каждый товар, без фотографа."
  },
  {
    name: "fashion-velvet", cat: "fashion", type: "image",
    title_en: "Studio — Velvet Dress",
    title_ru: "Студия — бархатное платье",
    desc_en: "Editorial studio pose with mood and texture — high-end campaign look.",
    desc_ru: "Эдиториал-поза в студии с настроением и фактурой — образ премиальной кампании."
  },

  /* ---------- AI fashion photography (image) — earlier lookbook ---------- */
  {
    name: "fashion-street", cat: "fashion", type: "image",
    title_en: "Streetstyle — Leather",
    title_ru: "Стритстайл — кожа",
    desc_en: "Photoreal AI model with a consistent face across a full lookbook.",
    desc_ru: "Фотореалистичная AI-модель с консистентным лицом на весь лукбук."
  },
  {
    name: "fashion-balcony", cat: "fashion", type: "image",
    title_en: "Morning Light",
    title_ru: "Утренний свет",
    desc_en: "Soft natural lighting and a lifestyle mood — catalog-ready.",
    desc_ru: "Мягкий естественный свет и lifestyle-настроение — готово для каталога."
  },
  {
    name: "fashion-casual", cat: "fashion", type: "image",
    title_en: "Casual Look",
    title_ru: "Кэжуал-лук",
    desc_en: "Clean full-length shot — the kind a store needs for every SKU.",
    desc_ru: "Чистый кадр в полный рост — такой нужен магазину под каждый товар."
  },
  {
    name: "fashion-sport", cat: "fashion", type: "image",
    title_en: "Sport Luxe",
    title_ru: "Спорт-люкс",
    desc_en: "Product, pose and accessory styled together in one generated frame.",
    desc_ru: "Товар, поза и аксессуар собраны в одном сгенерированном кадре."
  }
];

/* ---------- Paths ---------- */
const P = {
  thumb: n => `assets/thumb/${n}.jpg`,
  full:  n => `assets/full/${n}.jpg`,
  video: n => `assets/video/${n}.mp4`,
  poster:n => `assets/poster/${n}.jpg`
};

/* ---------- Language ---------- */
const getLang = () => localStorage.getItem("lang") || "en";
function setLang(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("lang", lang);
}
function initLang() {
  setLang(getLang());
  document.getElementById("langToggle").addEventListener("click",
    () => setLang(getLang() === "en" ? "ru" : "en"));
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const burger = document.getElementById("navBurger");
  const nav = document.getElementById("mainNav");
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ---------- Gallery ---------- */
function cardMarkup(w) {
  const badge = w.type === "video"
    ? `<span class="badge badge-video">▶</span>`
    : `<span class="badge">${w.cat === "fashion" ? "Fashion" : "3D"}</span>`;

  const media = w.type === "video"
    ? `<video muted loop playsinline preload="none" poster="${P.poster(w.name)}"
         data-src="${P.video(w.name)}"></video>`
    : `<img loading="lazy" src="${P.thumb(w.name)}" alt="">`;

  return `
    <article class="card" data-cat="${w.cat}" data-type="${w.type}" data-name="${w.name}">
      <div class="card-media">
        ${badge}
        ${media}
        <div class="card-overlay">
          <h3><span class="en">${w.title_en}</span><span class="ru">${w.title_ru}</span></h3>
          <p><span class="en">${w.desc_en}</span><span class="ru">${w.desc_ru}</span></p>
        </div>
      </div>
    </article>`;
}

function renderGallery(filter = "all") {
  const grid = document.getElementById("gallery");
  const items = WORKS.filter(w =>
    filter === "all" ||
    (filter === "video" && w.type === "video") ||
    w.cat === filter);

  grid.innerHTML = items.map(cardMarkup).join("");

  grid.querySelectorAll(".card").forEach(card => {
    const vid = card.querySelector("video");

    if (vid) {
      // lazy-load + hover play on desktop
      card.addEventListener("mouseenter", () => {
        if (!vid.src) vid.src = vid.dataset.src;
        vid.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => vid.pause());
    }

    card.addEventListener("click", () => {
      const w = WORKS.find(x => x.name === card.dataset.name);
      openLightbox(w);
    });
  });
}

function initFilters() {
  const tabs = document.getElementById("filterTabs");
  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    tabs.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
}

/* ---------- Lightbox ---------- */
function openLightbox(w) {
  const box = document.getElementById("lightbox");
  const content = document.getElementById("lightboxContent");
  content.innerHTML = w.type === "video"
    ? `<video src="${P.video(w.name)}" poster="${P.poster(w.name)}" controls autoplay playsinline loop></video>`
    : `<img src="${P.full(w.name)}" alt="">`;
  box.classList.add("open");
  box.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const box = document.getElementById("lightbox");
  document.getElementById("lightboxContent").innerHTML = "";
  box.classList.remove("open");
  box.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function initLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ---------- Featured video: play on tap ---------- */
function initFeature() {
  const fv = document.getElementById("featureVideo");
  if (!fv) return;
  fv.addEventListener("click", () => {
    if (fv.paused) { fv.play(); fv.setAttribute("controls", ""); }
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initNav();
  renderGallery();
  initFilters();
  initLightbox();
  initFeature();
  const y = new Date().getFullYear();
  document.getElementById("year").textContent = y;
  document.getElementById("year2").textContent = y;
});

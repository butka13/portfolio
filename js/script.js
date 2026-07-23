/* ==========================================================================
   Portfolio content — edit the WORKS array to add / rename your projects.
   Drop matching files into /images and /video (see README in each folder).
   ========================================================================== */

const WORKS = [
  {
    id: "work-01",
    type: "video",
    src: "video/work-01.mp4",
    poster: "images/work-01-poster.jpg",
    title_en: "Cinematic portrait — Cinema Studio",
    title_ru: "Кинематографичный портрет — Cinema Studio",
    desc_en: "Camera body + 50mm lens preset, shallow depth of field.",
    desc_ru: "Пресет камеры + объектив 50мм, малая глубина резкости.",
    tags: ["Cinema Studio", "Camera control"]
  },
  {
    id: "work-02",
    type: "image",
    src: "images/work-02.jpg",
    title_en: "Character consistency test — Soul",
    title_ru: "Тест консистентности персонажа — Soul",
    desc_en: "Same character, three angles, one reference image.",
    desc_ru: "Один персонаж, три ракурса, один референс.",
    tags: ["Soul", "Consistency"]
  },
  {
    id: "work-03",
    type: "image",
    src: "images/work-03.jpg",
    title_en: "Brand style preset",
    title_ru: "Брендовый стилевой пресет",
    desc_en: "Locked color, mood and lighting across a full set.",
    desc_ru: "Зафиксированные цвет, настроение и свет во всей серии.",
    tags: ["Style presets", "Branding"]
  },
  {
    id: "work-04",
    type: "video",
    src: "video/work-04.mp4",
    poster: "images/work-04-poster.jpg",
    title_en: "Photo → motion",
    title_ru: "Фото → движение",
    desc_en: "Single reference photo animated with motion control.",
    desc_ru: "Один референс, анимированный с помощью motion control.",
    tags: ["Image-to-video", "Motion control"]
  },
  {
    id: "work-05",
    type: "image",
    src: "images/work-05.jpg",
    title_en: "Upscaled key art",
    title_ru: "Апскейл ключевого арта",
    desc_en: "Generated at draft quality, finished at 4K.",
    desc_ru: "Сгенерировано в черновом качестве, доведено до 4K.",
    tags: ["Upscale", "Post-production"]
  },
  {
    id: "work-06",
    type: "video",
    src: "video/work-06.mp4",
    poster: "images/work-06-poster.jpg",
    title_en: "Short-form hook",
    title_ru: "Хук для короткого видео",
    desc_en: "First 2 seconds built to stop the scroll.",
    desc_ru: "Первые 2 секунды сделаны, чтобы остановить скролл.",
    tags: ["Social", "Virality"]
  }
];

/* ---------- Language ---------- */
function getLang() {
  return localStorage.getItem("lang") || "en";
}

function setLang(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("lang", lang);
}

function initLang() {
  setLang(getLang());
  document.getElementById("langToggle").addEventListener("click", () => {
    setLang(getLang() === "en" ? "ru" : "en");
  });
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const burger = document.getElementById("navBurger");
  const nav = document.getElementById("mainNav");
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

/* ---------- Gallery ---------- */
function workMediaMarkup(work) {
  if (work.type === "video") {
    return `<video muted loop playsinline preload="metadata"
      poster="${work.poster}" src="${work.src}"
      onerror="this.closest('.work-card').classList.add('missing')"
      onmouseenter="this.play()" onmouseleave="this.pause()"></video>`;
  }
  return `<img src="${work.src}" alt=""
    onerror="this.closest('.work-card').classList.add('missing')">`;
}

function renderGallery(filter = "all") {
  const grid = document.getElementById("gallery");
  const items = WORKS.filter(w => filter === "all" || w.type === filter);

  grid.innerHTML = items.map(w => `
    <article class="work-card" data-type="${w.type}" data-id="${w.id}">
      <div class="work-media">
        <span class="work-type-badge">${w.type === "video" ? "▶ video" : "image"}</span>
        ${workMediaMarkup(w)}
        <div class="work-missing-hint">
          <span class="en">Add <code>${w.src}</code></span>
          <span class="ru">Добавьте <code>${w.src}</code></span>
        </div>
      </div>
      <div class="work-info">
        <h3><span class="en">${w.title_en}</span><span class="ru">${w.title_ru}</span></h3>
        <p><span class="en">${w.desc_en}</span><span class="ru">${w.desc_ru}</span></p>
        <div class="work-tags">${w.tags.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".work-card").forEach(card => {
    card.addEventListener("click", () => {
      const work = WORKS.find(w => w.id === card.dataset.id);
      if (!card.classList.contains("missing")) openLightbox(work);
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
function openLightbox(work) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightboxContent");
  content.innerHTML = work.type === "video"
    ? `<video src="${work.src}" poster="${work.poster}" controls autoplay playsinline></video>`
    : `<img src="${work.src}" alt="">`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxContent").innerHTML = "";
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
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

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initNav();
  renderGallery();
  initFilters();
  initLightbox();
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
  document.getElementById("year2").textContent = year;
});

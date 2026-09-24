const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__links');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const slides = [...document.querySelectorAll('.testimonial__slide')];
const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');
let current = 0;

function showSlide(index) {
  if (!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
}
prev?.addEventListener('click', () => showSlide(current - 1));
next?.addEventListener('click', () => showSlide(current + 1));


// Hero carousel (Home)
const heroCarousel = document.querySelector('[data-hero-carousel]');

if (heroCarousel) {
  const heroSlides = [...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const heroPrev = heroCarousel.querySelector('[data-hero-prev]');
  const heroNext = heroCarousel.querySelector('[data-hero-next]');
  const heroDotsWrap = heroCarousel.querySelector('[data-hero-dots]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let heroIndex = Math.max(0, heroSlides.findIndex(slide => slide.classList.contains('is-active')));
  let heroTimer = null;
  let touchStartX = 0;

  const heroDots = heroSlides.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero-carousel__dot';
    dot.setAttribute('aria-label', `Mostrar imagen ${index + 1}`);
    dot.addEventListener('click', () => {
      showHeroSlide(index);
      restartHeroAutoplay();
    });
    heroDotsWrap?.appendChild(dot);
    return dot;
  });

  function showHeroSlide(index) {
    if (!heroSlides.length) return;
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => {
      const active = i === heroIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    heroDots.forEach((dot, i) => dot.classList.toggle('is-active', i === heroIndex));
  }

  function stopHeroAutoplay() {
    if (heroTimer) window.clearInterval(heroTimer);
    heroTimer = null;
  }

  function startHeroAutoplay() {
    if (reduceMotion || heroSlides.length < 2 || heroTimer) return;
    heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 6500);
  }

  function restartHeroAutoplay() {
    stopHeroAutoplay();
    startHeroAutoplay();
  }

  heroPrev?.addEventListener('click', () => {
    showHeroSlide(heroIndex - 1);
    restartHeroAutoplay();
  });
  heroNext?.addEventListener('click', () => {
    showHeroSlide(heroIndex + 1);
    restartHeroAutoplay();
  });

  heroCarousel.addEventListener('mouseenter', stopHeroAutoplay);
  heroCarousel.addEventListener('mouseleave', startHeroAutoplay);
  heroCarousel.addEventListener('focusin', stopHeroAutoplay);
  heroCarousel.addEventListener('focusout', startHeroAutoplay);
  heroCarousel.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }, { passive: true });
  heroCarousel.addEventListener('touchend', event => {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 45) {
      showHeroSlide(heroIndex + (delta < 0 ? 1 : -1));
      restartHeroAutoplay();
    }
  }, { passive: true });

  showHeroSlide(heroIndex);
  startHeroAutoplay();
}

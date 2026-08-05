// Año automático en el footer
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú móvil
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Header: sombra + compactado al hacer scroll
var header = document.querySelector('.site-header');
if (header) {
  var onScroll = function () {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Delay escalonado automático para grupos de tarjetas (data-stagger)
// Debe ejecutarse ANTES del observador de revelado: agrega la clase
// "reveal" a estas tarjetas, y el observador solo detecta elementos
// que ya tengan esa clase en el momento en que arma su lista.
(function () {
  document.querySelectorAll('[data-stagger] > *').forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (Math.min(i, 5) * 0.09) + 's';
  });
})();

// Revelado de elementos al hacer scroll (fade-up / scale / lateral)
(function () {
  var selector = '.reveal, .reveal-scale, .reveal-left, .reveal-right';
  var els = document.querySelectorAll(selector);
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });

  els.forEach(function (el) { observer.observe(el); });
})();

// Contador animado para números destacados (data-count="40")
(function () {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  var animate = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { obs.observe(el); });
})();

// Carrusel de videos: auto-scroll a la izquierda, pausa en hover,
// flechas para navegar y snap para no cortar ningún video a la mitad.
(function () {
  var track = document.querySelector('.video-carousel-track');
  if (!track) return;
  var carousel = track.closest('.video-carousel');
  var prevBtn = carousel.querySelector('.carousel-arrow-prev');
  var nextBtn = carousel.querySelector('.carousel-arrow-next');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var paused = false;
  var pauseUntil = 0;

  carousel.addEventListener('mouseenter', function () { paused = true; });
  carousel.addEventListener('mouseleave', function () { paused = false; });
  carousel.addEventListener('touchstart', function () { paused = true; }, { passive: true });
  carousel.addEventListener('touchend', function () { paused = false; pauseUntil = Date.now() + 2000; }, { passive: true });

  // Los iframes de YouTube se tragan los eventos del mouse, así que al pasar el
  // cursor sobre un video el carrusel nunca recibía mouseenter y seguía
  // desplazándose. Cubrimos cada video con una capa transparente que sí recibe
  // el hover; al hacer clic la capa se retira y el video queda reproducible.
  track.querySelectorAll('.video-embed').forEach(function (embed) {
    var iframe = embed.querySelector('iframe');
    if (!iframe) return;
    var shield = document.createElement('button');
    shield.type = 'button';
    shield.className = 'video-embed-shield';
    shield.setAttribute('aria-label', 'Reproducir: ' + (iframe.getAttribute('title') || 'video'));
    shield.addEventListener('click', function () {
      var src = iframe.getAttribute('src');
      if (src && src.indexOf('autoplay=') === -1) {
        iframe.setAttribute('src', src + (src.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1');
      }
      shield.remove();
      pauseUntil = Date.now() + 600000;
    });
    embed.appendChild(shield);
  });

  function slideStep() {
    var slide = track.querySelector('.video-carousel-slide');
    if (!slide) return 300;
    var style = getComputedStyle(track);
    var gap = parseFloat(style.columnGap || style.gap || 0) || 0;
    return slide.getBoundingClientRect().width + gap;
  }

  function goTo(dir) {
    track.scrollBy({ left: dir * slideStep(), behavior: 'smooth' });
    pauseUntil = Date.now() + 1600;
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(1); });

  if (!reducedMotion) {
    (function loop() {
      if (!paused && Date.now() > pauseUntil) {
        var max = track.scrollWidth - track.clientWidth;
        if (max > 1) {
          if (track.scrollLeft >= max - 1) {
            track.scrollLeft = 0;
          } else {
            track.scrollLeft += 0.6;
          }
        }
      }
      requestAnimationFrame(loop);
    })();
  }
})();

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

// Delay escalonado automático para grupos de tarjetas (data-stagger)
(function () {
  document.querySelectorAll('[data-stagger] > *').forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (Math.min(i, 5) * 0.09) + 's';
  });
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

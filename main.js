// ===== Mobile nav toggle (all pages) =====
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });
}

// ===== Tab switching (travel.html, verona-guide.html) =====
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    tabBtns.forEach(function (b) { b.classList.remove('active'); });
    panels.forEach(function (p) { p.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ===== Fade + rise reveal on scroll (hub cards, spot cards, boarding passes) =====
const revealTargets = document.querySelectorAll('.hub-card, .spot-card, .pass');
if (revealTargets.length && 'IntersectionObserver' in window) {
  revealTargets.forEach(function (el, i) {
    el.classList.add('reveal', 'reveal-hidden');
    el.style.transitionDelay = (i % 3) * 0.09 + 's';
  });
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-hidden');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  revealTargets.forEach(function (el) { revealObserver.observe(el); });
}

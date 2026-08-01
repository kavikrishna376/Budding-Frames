// ============================================================
// Budding_Frames — FRAME DETAIL PAGE JS
// Lightweight scroll-reveal for variant cards, gallery items and
// related-frame cards. Purely additive — no layout/theme changes.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.variant-card, .pg-item, .related-card, .feature-pill'
  );

  if (!revealTargets.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach(el => el.style.opacity = 1);
    return;
  }

  revealTargets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => io.observe(el));
});

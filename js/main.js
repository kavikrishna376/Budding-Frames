// ============================================================
// Budding_Frames — SHARED SITE JS
// Loaded on the homepage and every frame detail page.
// ============================================================

// ===== EDIT THIS: your real WhatsApp number with country code, no + or spaces =====
const WHATSAPP_NUMBER = "919361679065"; // e.g. 91 + 10-digit mobile number

function wireWhatsAppLinks(root = document) {
  root.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.getAttribute('data-wa');
    el.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
}

function wireMobileNav() {
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

function wireFooterYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

function wireImageFallback() {
  const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#2b2622"/><g fill="none" stroke="#C9A24B" stroke-width="14"><rect x="120" y="180" width="560" height="380" rx="24"/><circle cx="400" cy="370" r="110"/><rect x="320" y="120" width="160" height="70" rx="14"/></g></svg>`
  );
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => { img.onerror = null; img.src = FALLBACK_IMG; }, { once: true });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wireWhatsAppLinks();
  wireMobileNav();
  wireFooterYear();
  wireImageFallback();
});

/* =========================================================
   NovoX Media landing page — interactions
   Change APP_URL to your live app domain before deploying.
   ========================================================= */
const APP_URL = 'https://novox-user-frontend.vercel.app';

// Point every "Start free" / "Log in" button at the app.
document.querySelectorAll('.cta-start').forEach((a) => (a.href = APP_URL + '/register'));
document.querySelectorAll('.cta-login').forEach((a) => (a.href = APP_URL + '/login'));

// Current year in the footer.
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// Sticky nav shadow on scroll.
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu.
const burger = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
burger?.addEventListener('click', () => {
  const open = links.classList.toggle('show');
  burger.classList.toggle('open', open);
});
links?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  links.classList.remove('show');
  burger.classList.remove('open');
}));

// Scroll-reveal via IntersectionObserver, with a small stagger via data-delay.
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const delay = Number(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('in'), delay);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Count-up animation for numbers (runs once when visible).
function countUp(el) {
  const target = Number(el.dataset.to || 0);
  const dur = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = Math.round(target * eased).toLocaleString('en-IN');
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('en-IN');
  };
  requestAnimationFrame(step);
}
const counters = document.querySelectorAll('.count');
if ('IntersectionObserver' in window) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));
} else {
  counters.forEach(countUp);
}

// Pricing monthly / yearly toggle.
const tBtns = document.querySelectorAll('.t-btn');
const amts = document.querySelectorAll('.amt');
const pers = document.querySelectorAll('.per');
tBtns.forEach((b) => b.addEventListener('click', () => {
  tBtns.forEach((x) => x.classList.remove('active'));
  b.classList.add('active');
  const yearly = b.dataset.cycle === 'yearly';
  amts.forEach((a) => { a.textContent = '₹' + (yearly ? a.dataset.y : a.dataset.m); });
  pers.forEach((p) => { p.textContent = yearly ? '/yr' : '/mo'; });
}));

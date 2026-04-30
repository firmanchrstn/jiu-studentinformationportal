/* ============================================================
   dashboard.js — Dashboard Interactivity & Counter Animation
   JIU Student Portal
   ============================================================ */

/* ── Animated Counter ── */
function animateCounter(el) {
  const target   = +el.dataset.target;
  const duration = 1200; // ms
  const step     = target / (duration / 16);
  let current    = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

/* Trigger counters when they enter the viewport */
const counters = document.querySelectorAll('.stat-value[data-target]');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

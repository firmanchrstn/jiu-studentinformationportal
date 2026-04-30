/* ============================================================
   sidebar.js — Sidebar Toggle, Active Nav, Ripple Effect
   JIU Student Portal
   ============================================================ */

const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

/* ── Open / Close Sidebar (Mobile) ── */
function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  hamburger.innerHTML = '<i class="fas fa-xmark"></i>';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}

hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

/* ── Active Nav Item + Ripple Effect ── */
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    /* Create ripple */
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${e.clientX - rect.left - size / 2}px;
      top:    ${e.clientY - rect.top  - size / 2}px;
    `;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    /* Set active */
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    /* Auto-close on mobile */
    if (window.innerWidth < 680) closeSidebar();
  });
});

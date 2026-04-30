/* ── Sidebar Mobile Logic ── */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

function toggleSidebar() {
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    hamburger.innerHTML = '<i class="fas fa-xmark"></i>';
  }
}

if(hamburger && overlay) {
  hamburger.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);
}

/* ── Ripple Effect on Nav Items ── */
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // Only apply visual logic if it's the dashboard menu for now
    if (this.dataset.page === 'dashboard') {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    }

    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  });
});
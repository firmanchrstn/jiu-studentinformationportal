/* ── Counter Animation Logic ── */
function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

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

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-value[data-target]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});

/* ── Dynamic Contextual Greeting ── */
function updateDynamicGreeting() {
    const greetingElement = document.getElementById('dynamic-greeting');
    if (!greetingElement) return;

    const currentHour = new Date().getHours();
    let greetingText = 'Good evening'; // Default for 18:00 - 23:59

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'Good afternoon';
    }

    // Injecting the dynamic greeting alongside the hardcoded name
    greetingElement.textContent = `${greetingText}, Firman!`;
}

// Ensure functions run smoothly after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDynamicGreeting();
    // (Pastikan fungsi IntersectionObserver untuk counter animasi tetap ada di bawah sini)
});
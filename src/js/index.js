const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menu-link");

// Responsive menu
menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("translate-x-0");
  mobileMenu.classList.toggle("translate-x-full");
  document.documentElement.classList.toggle("no-scroll");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.documentElement.classList.remove("no-scroll");
  });
});

// Reveal animations on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
    }
  });
}, { threshold: 0 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Course Modules Scroll Activation
const moduleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const indicator = entry.target.querySelector(".step-indicator");
    const number = entry.target.querySelector(".step-number");

    if (entry.isIntersecting) {
      // Activate
      indicator.classList.remove("bg-surface", "border-white/20");
      indicator.classList.add("bg-primary", "border-dark", "shadow-[0_0_20px_rgba(52,211,153,0.5)]");
      number.classList.remove("text-gray-500");
      number.classList.add("text-dark");
    } else {
      // Deactivate
      indicator.classList.add("bg-surface", "border-white/20");
      indicator.classList.remove("bg-primary", "border-dark", "shadow-[0_0_20px_rgba(52,211,153,0.5)]");
      number.classList.add("text-gray-500");
      number.classList.remove("text-dark");
    }
  });
}, {
  threshold: 0.6, // Activate when 60% of the item is visible
  rootMargin: "-10% 0px -10% 0px" // Slight margin to feel more natural
});

document.querySelectorAll(".module-item").forEach(el => moduleObserver.observe(el));

document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");
    const index = item.querySelector(".faq-index");

    document.querySelectorAll(".faq-content").forEach(c => {
      if (c !== content) {
        c.classList.remove("open");
        c.closest(".faq-item")
          .querySelector(".faq-icon")
          .classList.remove("faq-icon-active");
      }
    });

    content.classList.toggle("open");
    icon.classList.toggle("faq-icon-active");
    index.classList.toggle("faq-index-active");
  });
});
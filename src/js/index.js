const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menu-link");

// Responsive menu logic
menuButton.addEventListener("click", function () {
  const isOpen = mobileMenu.classList.contains("translate-x-0");
  if (isOpen) {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.documentElement.classList.remove("no-scroll");
  } else {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.documentElement.classList.add("no-scroll");
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.documentElement.classList.remove("no-scroll");
  });
});

// FAQ Accordion
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");
    const index = item.querySelector(".faq-index");

    document.querySelectorAll(".faq-content").forEach(c => {
      if (c !== content) {
        c.classList.remove("open");
        const otherItem = c.closest(".faq-item");
        otherItem.querySelector(".faq-icon").classList.remove("faq-icon-active");
        otherItem.querySelector(".faq-index").classList.remove("faq-index-active");
      }
    });

    content.classList.toggle("open");
    icon.classList.toggle("faq-icon-active");
    index.classList.toggle("faq-index-active");
  });
});
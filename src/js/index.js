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
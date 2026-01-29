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





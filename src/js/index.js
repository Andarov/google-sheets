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

// Setup features swiper
new Swiper(".features-swiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  navigation: {
    prevEl: ".features-swiper-btn-prev",
    nextEl: ".features-swiper-btn-next",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const gallery = [
    "./src/assets/images/backgrounds/1.jpg",
    "./src/assets/images/backgrounds/2.jpg",
    "./src/assets/images/backgrounds/3.jpg",
    "./src/assets/images/backgrounds/4.jpg",
    "./src/assets/images/backgrounds/5.jpg",
    "./src/assets/images/backgrounds/6.jpg",
    "./src/assets/images/backgrounds/7.jpg"
  ];

  const wrapper = document.querySelector(".gallery-swiper .swiper-wrapper");

  gallery.forEach(img => {
    const slide = document.createElement("div");
    slide.className = `
      swiper-slide !w-5/6 lg:!w-[820px]
      rounded-xl sm:rounded-2xl
      shadow-xl overflow-hidden flex items-center justify-center
    `;
    
    const image = document.createElement("img");
    image.src = img;
    image.alt = "Gallery image";
    image.className = "w-full h-full object-cover bg-black"; 
    // object-contain rasmni kesmaydi, qora fon qo'shiladi
  
    slide.appendChild(image);
    wrapper.appendChild(slide);
  });
  

  new Swiper(".gallery-swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      820: { slidesPerView: 3 },
      620: { slidesPerView: 2 },
    },
    navigation: {
      prevEl: ".btn-prev",
      nextEl: ".btn-next",
    },
  });
});



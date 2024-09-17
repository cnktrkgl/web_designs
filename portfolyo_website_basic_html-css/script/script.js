const hamburger = document.getElementById("hamburger");
const nav_list = document.getElementById("nav_list_responsive");
hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});

// const navBtn = document.querySelector(".navBtn");
// const navbar = document.querySelector(".navbar");
// const navClose = document.querySelector(".navClose");
// navBtn.addEventListener("click", () => {
//   navbar.classList.add("showNavbar");
// });
// navClose.addEventListener("click", () => {
//   navbar.classList.remove("showNavbar");
// });

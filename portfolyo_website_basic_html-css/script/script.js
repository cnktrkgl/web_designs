const hamburger = document.getElementById("hamburger");
const nav_list = document.getElementById("nav_list_responsive");
const links = Array.from(
  document.getElementsByClassName("nav_list_responsive_link")
);
const darkmode_btn = document.getElementById("dark_mode_btn");
const darkmode_btn_mobile = document.getElementById("mobile_dark_mode_btn");
const body = document.body;

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});

links.forEach((element) => {
  element.addEventListener("click", () => {
    nav_list.classList.remove("active");
  });
});

darkmode_btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

darkmode_btn_mobile.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

body.classList.add("light-mode");

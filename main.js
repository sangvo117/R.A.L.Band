window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navigation = document.querySelector("nav");
const menuIcon = document.querySelector(".toggle");
const menuBtn = document.querySelector(".menu-btn");

const form = document.getElementById("contact-form");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuIcon.classList.toggle("active");
  navigation.classList.toggle("active");
});

const closeMenu = () => {
  navigation.classList.remove("active");
  menuIcon.classList.remove("active");
  menuBtn.classList.toggle("open");
};



form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const blurMain = document.getElementById("main");
const blurHeader = document.querySelector("header");
const blurFooter = document.getElementById("footer");
const toggleEmailModal = () => {
  blurMain.classList.toggle("active");
  blurFooter.classList.toggle("active");
  blurHeader.classList.toggle("active");
  let popup = document.getElementById("pop-up");
  popup.classList.toggle("active");
};

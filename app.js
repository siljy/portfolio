const hamMenu = document.querySelector(".ham-menu");
const navLinks = document.querySelector(".nav-links");

hamMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

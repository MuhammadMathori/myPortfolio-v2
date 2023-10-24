//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//kotak
const kotak = document.querySelector("#kotak");
const navMenu = document.querySelector("#nav-menu");

kotak.addEventListener("click", function () {
  kotak.classList.toggle("kotak-active");
  navMenu.classList.toggle("hidden");
});

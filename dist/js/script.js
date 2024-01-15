//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//kotak
const kotak = document.querySelector("#kotak");
const navMenu = document.querySelector("#nav-menu");

kotak.addEventListener("click", function () {
  kotak.classList.toggle("kotak-active");
  navMenu.classList.toggle("hidden");
});

//klik di luar kotak
window.addEventListener("click", function (e) {
  if (e.target != kotak && e.target != navMenu) {
    kotak.classList.remove("kotak-active");
    navMenu.classList.add("hidden");
  }
});

//Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//function from
const contactForm = document.getElementById("Contact-Form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      //url Teriam Kasih
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("Error"));
});

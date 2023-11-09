// логика скрытия хедера
let lastScroll = 0;
const defaultOffset = 300;
const header = document.querySelector("header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }
  lastScroll = scrollPosition();
});

// замена логотипа хедера
const defaultLogo = 200;
const containCreate = () => logo.classList.contains("create");
const logo = document.querySelector(".header__logo");

window.addEventListener("scroll", () => {
  if (scrollPosition() > defaultLogo) {
    logo.classList.add("create");
  } else if (scrollPosition() < defaultLogo) {
    logo.classList.remove("create");
  }
  lastScroll = scrollPosition();
});

// Открытие/закрытие гамбургер меню
const hamburger = document.querySelector(".hamburger");
const openHamburgerButton = document.querySelector(".hamburger-menu");
const closeHamburgerButton = document.querySelector(".hamburger__close-menu");

const openHamburger = () => {
  hamburger.classList.add("hamburger_opened");
};

const closeHamburger = () => {
  hamburger.classList.remove("hamburger_opened");
};

function closeHamburgerEsc(evt) {
  if (evt.key === "Escape") {
    closeHamburger();
  }
};

function closeHamburgerOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeHamburger();
  }
}

openHamburgerButton.addEventListener('click', openHamburger);
closeHamburgerButton.addEventListener('click', closeHamburger);
hamburger.addEventListener('click', closeHamburgerOverlay);
window.addEventListener('keyup', closeHamburgerEsc);

// const setEventListeners = () => {
//   hamburger.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('hamburger_opened') || evt.target.classList.contains('hamburger__close-menu')) {
//       closeHamburger();
//     }
// });
// }

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navMainPage = document.getElementById('navMainPage');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navPrices = document.getElementById('navPrices');
const navContact = document.getElementById('navContact');
const navItems = [navMainPage, navAbout, navServices, navPrices, navContact];

function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    navAnimation('out', 'in');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navAnimation('in', 'out');
  }
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

function abreMenu() {
  let icon = document.querySelector(".fa-solid.fa-bars");
  let mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    icon.classList.remove("fa-x");
  } else {
    mobileMenu.classList.add("open");
    icon.classList.add("fa-x");
  }
}

function ocultaMenuMobile() {
  let viewport = window.innerWidth;
  let icon = document.querySelector(".fa-solid.fa-bars");
  let mobileMenu = document.querySelector(".mobile-menu");

  if (viewport > 699) {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      if (icon.classList.contains("fa-x")) {
        icon.classList.remove("fa-x");
      }
    }
  }
}

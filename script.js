const menu = document.querySelector(".header__nav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".header__hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const mobileTitle = document.querySelector(".mobile-title");
const desktopTitle = document.querySelector(".desktop-title");
const desktopNav = document.querySelector(".header__list");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        hamburger.style.position = "static";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        hamburger.style.position = "fixed";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
    if (e.matches) {
        mobileTitle.style.display = "none";
        desktopTitle.style.display = "block";
        desktopNav.style.display = "inline";
        hamburger.style.display = "none";
    } else {
        mobileTitle.style.display = "block";
        desktopTitle.style.display = "none";
        desktopNav.style.display = "none";
        hamburger.style.display = "block";
    }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

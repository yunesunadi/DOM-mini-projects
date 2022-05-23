const menu = document.querySelector(".checkbox");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const navList = document.querySelector(".nav-list");
const navItems = document.querySelector(".nav-items");
const navItemsHeight = navItems.getBoundingClientRect().height;
const navLink = document.querySelectorAll(".nav-link");
const hero = document.querySelector("#hero");
const heroHeight = hero.getBoundingClientRect().height;
const halfHeroHeight = heroHeight / 2;
const scrollNextBtn = document.querySelector(".scroll-next-section");
const currentYear = document.querySelector(".current-year");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > navHeight) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
    if (window.pageYOffset > halfHeroHeight) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

menu.addEventListener("click", () => {
    if (menu.checked) {
        navList.style.height = `${navItemsHeight}px`;
    } else {
        navList.style.height = 0;
    }
});

navLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        navList.style.height = 0;
        menu.checked = !menu.checked;
        e.preventDefault();
        scrollToId(e);
    });
});

scrollNextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(e);
});

function scrollToId(e) {
    const elementId = e.currentTarget.getAttribute("href");
    const element = document.querySelector(elementId);
    const elementTop = element.offsetTop;
    const position = elementTop - navHeight;
    window.scroll({
        top: position,
    });
}

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
    });
});

const date = new Date();
const year = date.getFullYear();
currentYear.textContent = year;

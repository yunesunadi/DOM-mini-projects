const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-item .nav-link");

const toggleMenu = (btn) => {
    btn.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        navLinks.forEach((navLink, index) => {
            navLink.classList.toggle("show-animation");
            if (navLink.style.animationDelay) {
                navLink.style.animationDelay = "";
            } else {
                navLink.style.animationDelay = `${index * 0.3}s`;
            }
        });
    });
};

toggleMenu(menuBtn);
toggleMenu(closeBtn);

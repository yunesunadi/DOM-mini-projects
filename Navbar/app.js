const bars = document.querySelector(".bars");
const navList = document.querySelector(".nav-list");

bars.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
});

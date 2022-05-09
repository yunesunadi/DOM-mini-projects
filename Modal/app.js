const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const toggleModal = (element) => {
    element.addEventListener("click", () => {
        modal.classList.toggle("active");
        overlay.classList.toggle("active");
    });
};

toggleModal(openBtn);
toggleModal(closeBtn);
toggleModal(overlay);

const tabBtnContainer = document.querySelector(".btn-container");
const tabContentContainer = document.querySelector(".content-container");
const firstTab = tabs[0];

tabBtnContainer.innerHTML = tabs
    .map((tab) => {
        const { btn } = tab;
        return `<button class="tab-btn ${
            tab === firstTab ? "active" : ""
        }" data-id="${btn}">${btn}</button>`;
    })
    .join("");

tabContentContainer.innerHTML = tabs
    .map((tab) => {
        const { btn, content } = tab;
        return `<article class="tab-content ${
            tab === firstTab ? "active" : ""
        }" data-id="${btn}">
                    <p>${content}</p>
                </article>`;
    })
    .join("");

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", (e) => {
        const currentBtn = e.currentTarget;
        currentBtn.classList.add("active");

        tabBtns.forEach((tabBtn) => {
            if (currentBtn !== tabBtn) {
                tabBtn.classList.remove("active");
            }
        });

        tabContents.forEach((tabContent) => {
            if (tabContent.dataset.id === e.currentTarget.dataset.id) {
                tabContent.classList.add("active");
            } else {
                tabContent.classList.remove("active");
            }
        });
    });
});

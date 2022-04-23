import faqs from "./faqs.js";

let faq = "";
const faqList = document.querySelector(".faqs");

faqs.forEach(({ question, answer }) => {
    faq += `<article class="faq">
                <div class="question-title">
                    <h3 class="question">${question}</h3>
                    <button class="chevron-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                <p class="answer">${answer}</p>
            </article>`;
});
faqList.innerHTML = faq;

const faqItems = document.querySelectorAll(".faq");

faqItems.forEach((currentItem) => {
    const toggleBtn = currentItem.querySelector(".chevron-icon");
    toggleBtn.addEventListener("click", () => {
        faqItems.forEach((faqItem) => {
            if (currentItem !== faqItem) {
                faqItem.classList.remove("active");
            }
        });
        currentItem.classList.toggle("active");
    });
});

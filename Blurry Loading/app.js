const bgContainer = document.querySelector(".bg-container");
const loadingPercent = document.querySelector(".loading-percent");

let startCount = 0;
let endCount = 100;
let blurValue = 45;
const minusValue = blurValue / 100;
const delay = 35;

window.addEventListener("DOMContentLoaded", () => {
    bgContainer.style.filter = `blur(${blurValue}px)`;
});

const loading = () => {
    if (startCount === endCount) {
        clearInterval(loading);
    } else {
        startCount++;
        loadingPercent.textContent = `${startCount}%`;
    }

    endCount--;
    const opacityValue = endCount / 100;
    if (opacityValue >= 0) {
        loadingPercent.style.opacity = `${opacityValue}`;
    }

    blurValue -= minusValue;
    if (Math.floor(blurValue) < 0) {
        blurValue = 0;
        bgContainer.style.filter = `blur(${blurValue}px)`;
    } else {
        bgContainer.style.filter = `blur(${blurValue}px)`;
    }
};

const interval = setInterval(loading, delay);

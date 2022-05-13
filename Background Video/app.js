const video = document.querySelector(".background-video");
const controlBtn = document.querySelector(".video-control-btn");
const controlInput = document.querySelector(".video-control-input");
const progress = document.querySelector(".progress");
const progressPercent = document.querySelector(".progress-percent");
const preloader = document.querySelector(".preloader");

let startLimit = 0;
let endLimit = 100;

const progressInterval = setInterval(renderProgress, 25);

function renderProgress() {
    if (startLimit === endLimit) {
        clearInterval(progressInterval);
    } else {
        startLimit++;
        progress.style.width = `${startLimit}%`;
        progressPercent.textContent = `${startLimit}%`;
    }
}

setTimeout(() => {
    preloader.classList.add("hide");
}, 2600);

controlBtn.addEventListener("click", () => {
    if (controlInput.checked) {
        video.play();
    } else {
        video.pause();
    }
});

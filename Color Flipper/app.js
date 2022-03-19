const container = document.getElementById("container");
const colorCode = document.getElementById("color-code");
const changeBtn = document.getElementById("change-btn");
const copyBtn = document.getElementById("copy-btn");

const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

changeBtn.addEventListener("click", changeColor);

document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        changeColor();
    }
});

copyBtn.addEventListener("click", copyColor);

function changeColor() {
    const value = Math.floor(Math.random() * 3);
    switch (value) {
        case 0:
            changeHexColor();
            break;
        case 1:
            changeRgbColor();
            break;
        case 2:
            changeHslColor();
            break;
        default:
            console.log("Unexpected Color!");
    }
}

function changeHexColor() {
    let result = "";
    for (let i = 0; i < 6; i++) {
        let randomValue = getRandomHexValue();
        result += hexValue[randomValue];
    }
    colorCode.textContent = `#${result}`;
    container.style.backgroundColor = `#${result}`;
}

function getRandomHexValue() {
    const value = Math.floor(Math.random() * hexValue.length);
    return value;
}

function changeRgbColor() {
    const result = `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`;
    colorCode.textContent = result;
    container.style.backgroundColor = result;
}

function getRandomRgbValue() {
    const value = Math.floor(Math.random() * 256);
    return value;
}

function changeHslColor() {
    const hslValue = getRandomHslValue();
    const result = `hsl(${hslValue.hue}, ${hslValue.saturation}%, ${hslValue.lightness}%)`;
    colorCode.textContent = result;
    container.style.backgroundColor = result;
}

function getRandomHslValue() {
    const value = {
        hue: Math.floor(Math.random() * 361),
        saturation: Math.floor(Math.random() * 101),
        lightness: Math.floor(Math.random() * 101),
    };
    return value;
}

function copyColor() {
    const result = colorCode.textContent;
    navigator.clipboard.writeText(result);

    const span = document.createElement("span");
    span.textContent = "Copied!";
    span.id = "copy-message";
    copyBtn.appendChild(span);
    setTimeout(() => {
        copyBtn.removeChild(span);
    }, 800);
}

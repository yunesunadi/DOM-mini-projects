const count = document.getElementById("count");
const btnList = document.querySelector(".btn-list");
const btns = btnList.getElementsByTagName("button");
const inputs = document.querySelectorAll("input[type='text']");
const plusRange = document.getElementById("plus");
const minusRange = document.getElementById("minus");

let countValue = 0;

Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const classNames = e.currentTarget.classList;
        if (classNames.contains("increase-btn")) {
            countValue++;
        } else if (classNames.contains("decrease-btn")) {
            countValue--;
        } else {
            countValue = 0;
        }
        changeColor();
        count.textContent = countValue;
        setRange();
    });
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
        countValue++;
    }
    if (e.code === "ArrowDown") {
        countValue--;
    }
    if (e.code === "Space") {
        countValue = 0;
    }
    changeColor();
    count.textContent = countValue;
    setRange();
});

function changeColor() {
    if (countValue > 0) {
        count.style.color = "#65c18c";
    } else if (countValue === 0) {
        count.style.color = "#bb9981";
    } else {
        count.style.color = "#fd5d5d";
    }
}

inputs.forEach((input) => {
    input.addEventListener("change", setRange);
});

function setRange() {
    let plusValue = Math.round(parseInt(plusRange.value));
    let minusValue = Math.round(parseInt(minusRange.value));

    plusValue = plusValue > 0 ? plusValue : -plusValue; // To prevent filling negative value in + range
    minusValue = minusValue < 0 ? minusValue : -minusValue; // To work filling value includes minus sign in - range

    if (!isNaN(plusValue) || !isNaN(minusValue)) {
        if (countValue > plusValue || countValue < minusValue) {
            alert("Out of range!");
            count.textContent = 0;
            countValue = 0;
            count.style.color = "#bb9981";
        }
    }
}

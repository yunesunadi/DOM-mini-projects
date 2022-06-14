const tagOptions = document.querySelector(".tag-options");
const tagsEl = document.querySelector(".tags");
const err = "No results found";

let arr = [];

const tags = [
    "html",
    "css",
    "scss",
    "bootstrap",
    "javascript",
    "jquery",
    "react",
    "react-router",
    "redux",
    "ajax",
    "json",
    "babel",
    "webpack",
];

showAllTags();
showMatchedTags();
showUniqueTags();
showMatchedTags();
createNewTags();

function showAllTags() {
    const uniqueTags = JSON.parse(sessionStorage.getItem("uniqueTags"));

    const allTags = tags
        .map(
            (tag) =>
                `<li class="tag-option ${
                    uniqueTags && uniqueTags.indexOf(tag) !== -1
                        ? "disable"
                        : ""
                }">${tag}</li>`
        )
        .join("");

    tagOptions.innerHTML = allTags;

    createTags();
}

function showMatchedTags() {
    const tagInput = document.querySelector(".tag-input");

    tagInput.focus();

    showAllTags();

    tagInput.addEventListener("input", (e) => {
        const inputValue = e.target.value.toLowerCase().trim();
        const uniqueTags = JSON.parse(sessionStorage.getItem("uniqueTags"));

        const matchedTags = tags
            .filter((tag) => tag.toLowerCase().includes(inputValue))
            .map((tag) => {
                const highlightedTag = tag.replace(
                    inputValue,
                    `<span class="highlight">${inputValue}</span>`
                );
                return `<li class="tag-option  ${
                    uniqueTags && uniqueTags.indexOf(tag) !== -1
                        ? "disable"
                        : ""
                }">${highlightedTag}</li>`;
            })
            .join("");

        tagOptions.innerHTML = matchedTags;

        if (tagOptions.children.length === 0) {
            tagOptions.innerHTML = `<li class="tag-option">${err}</li>`;
        }

        createTags();
        createNewTags();
    });
}

function createNewTags() {
    const tagInput = document.querySelector(".tag-input");

    tagInput.addEventListener("keyup", (e) => {
        let inputValue = e.target.value.toLowerCase().trim();
        inputValue =
            inputValue.indexOf(",") !== -1
                ? inputValue.slice(0, -1)
                : inputValue;

        if (inputValue) {
            if (
                e.code === "Comma" ||
                e.code === "Space" ||
                e.code === "Enter"
            ) {
                arr.push(inputValue);

                getUniqueTags();
            }
        }
    });
}

function createTags() {
    const matchedTagEls = document.querySelectorAll(".tag-option");

    matchedTagEls.forEach((matchedTagEl) => {
        if (matchedTagEl.textContent === err) {
            matchedTagEl.style.cursor = "auto";
        } else {
            matchedTagEl.addEventListener("click", (e) => {
                arr.push(e.currentTarget.textContent);

                getUniqueTags();
            });
        }
    });
}

function getUniqueTags() {
    const uniqueItems = arr.reduce((previousValue, currentValue) => {
        if (!previousValue.includes(currentValue)) {
            previousValue.push(currentValue);
        }
        return previousValue;
    }, []);

    if (!sessionStorage.getItem("uniqueTags")) {
        sessionStorage.setItem("uniqueTags", JSON.stringify(uniqueItems));
    } else {
        let uniqueTags = JSON.parse(sessionStorage.getItem("uniqueTags"));
        uniqueTags.push(...uniqueItems);

        uniqueTags = uniqueTags.reduce((previousValue, currentValue) => {
            if (!previousValue.includes(currentValue)) {
                previousValue.push(currentValue);
            }
            return previousValue;
        }, []);

        sessionStorage.setItem("uniqueTags", JSON.stringify(uniqueTags));
    }

    showUniqueTags();
    showMatchedTags();
}

function showUniqueTags() {
    let liEls = "";
    const uniqueTags = JSON.parse(sessionStorage.getItem("uniqueTags"));

    if (uniqueTags) {
        uniqueTags.forEach((uniqueTag) => {
            liEls += `<li class="tag">${uniqueTag}<i class="fa-solid fa-square-xmark"></i></li>`;
        });
    }

    tagsEl.innerHTML = `${liEls}<input type="text" class="tag-input" />`;

    const deleteEls = document.querySelectorAll(".fa-square-xmark");

    deleteEls.forEach((deleteEl) => {
        deleteEl.addEventListener("click", (e) => {
            const tagContent = e.currentTarget.parentElement.textContent;
            const index = uniqueTags.indexOf(tagContent);
            uniqueTags.splice(index, 1);

            sessionStorage.setItem("uniqueTags", JSON.stringify(uniqueTags));

            location.href = location.href;
        });
    });
}

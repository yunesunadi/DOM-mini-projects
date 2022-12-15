import projects from "./projects.js";

const projectsContainer = document.querySelector(".cards");
const githubBaseUrl =
    "https://github.com/yunesunadi/DOM-mini-projects/blob/master/";
const siteBaseUrl = "https://yunesunadi.com/DOM%20Mini%20Projects/";
let cardEls = "";

projects.forEach(({ id, name }) => {
    cardEls += `
    <article class="card">
        <h4 class="card-title">${id}. ${name}</h4>
        <div class="social-links">
            <a
                href="${githubBaseUrl + name}"
                target="_blank"
                class="social-link"
                ><i class="fa-brands fa-github"></i> View Code</a
            >
            <a href="${siteBaseUrl + name}" target="_blank" class="social-link"
                ><i class="fa-sharp fa-solid fa-eye"></i> Live Preview</a
            >
        </div>
    </article>`;
});

projectsContainer.innerHTML = cardEls;

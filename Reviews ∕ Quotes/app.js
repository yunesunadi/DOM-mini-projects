const reviews = [
    {
        id: 1,
        name: "Gordon Nelson",
        job: "Web Developer",
        profile: "https://randomuser.me/api/portraits/men/36.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis purus eu leo auctor cursus. Vivamus aliquet dictum dolor, vel pellentesque nisi porta dapibus.Fusce fermentum non felis et vehicula. In gravida consequat leo, in sodales erat volutpat nec.",
    },
    {
        id: 2,
        name: "Tracy Torres",
        job: "Project Manager",
        profile: "https://randomuser.me/api/portraits/men/78.jpg",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet mollis elit tempus lacus, auctor suscipit . Aenean a mi malesuada, mattis purus nec, molestie mauris. Suspendisse consequat justo ac massa posuere mattis.",
    },
    {
        id: 3,
        name: "Gladys Hayes",
        job: "Web Designer",
        profile: "https://randomuser.me/api/portraits/women/67.jpg",
        text: "Etiam luctus finibus tortor vel feugiat. Nullam eu ipsum magna. Fusce vitae risus risus. Aenean sed tristique tellus. Aliquam tincidunt turpis et dui imperdiet auctor. Integer id tempus lacus, auctor suscipit arcu. Fusce aliquam nisi at malesuada commodo.",
    },
    {
        id: 4,
        name: "Elizabeth Hawkins",
        job: "Data Analyst",
        profile: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "Nullam eleifend eget metus in eleifend. Proin viverra iaculis iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos volutpat elit in himenaeos. Ut eu lorem nunc. Curabitur eu vehicula sem. Fusce a est in neque blandit dignissim.",
    },
    {
        id: 5,
        name: "Lewis Holmes",
        job: "Software Engineer",
        profile: "https://randomuser.me/api/portraits/men/98.jpg",
        text: "Sed condimentum libero vel risus ultricies, a porta neque convallis. Cras non lacus a mi porta sollicitudin ut vitae ex. Suspendisse  purus porta mattis. Integer non risus efficitur nisl efficitur congue et ac tortor. Vestibulum aliquam vehicula malesuada.",
    },
];

const profile = document.getElementById("profile");
const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const reviewInfo = document.querySelector(".review-info");

let currentItem = 0;
const interval = setInterval(moveLeft, 3000);

window.addEventListener("load", () => {
    showReview();
});

prevBtn.addEventListener("click", () => {
    moveRight();
    clearInterval(interval);
});

nextBtn.addEventListener("click", () => {
    moveLeft();
    clearInterval(interval);
});

function showReview() {
    const reviewItem = reviews[currentItem];
    profile.src = reviewItem.profile;
    name.textContent = reviewItem.name;
    job.textContent = reviewItem.job;
    text.textContent = reviewItem.text;
}

function moveRight() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showReview();
    toggleClass("move-right");
}

function moveLeft() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showReview();
    toggleClass("move-left");
}

function toggleClass(className) {
    reviewInfo.classList.add(className);
    setTimeout(() => {
        reviewInfo.classList.remove(className);
    }, 700);
}

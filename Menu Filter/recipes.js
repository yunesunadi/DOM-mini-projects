const recipes = [
    {
        id: 1,
        name: "spaghetti bolognese",
        image: "https://img.taste.com.au/fgA3ZYIm/w316-h210-cfill-q80/taste/2019/06/spaghetti-bolognese_taste-150949-2.jpg",
        price: "18.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos delectus repellat, corrupti quas.",
        category: "spaghetti bolognese",
    },
    {
        id: 2,
        name: "quick cajun fish tacos",
        image: "https://img.taste.com.au/DSkf-8Hu/w316-h210-cfill-q80/taste/2020/02/cajun-barramundi-tacos-158372-1.jpg",
        price: "14.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum dolores veritatis maxime excepturi voluptas?",
        category: "fish taco",
    },
    {
        id: 3,
        name: "black rice bowl with chicken and mushroom",
        image: "https://img.taste.com.au/zlskKfL-/w316-h210-cfill-q80/taste/2020/11/black-rice-bowl-with-chicken-and-mushroom-166726-2.jpg",
        price: "15.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi dolores reprehenderit delectus corporis.",
        category: "chicken and rice",
    },
    {
        id: 4,
        name: "jerk chicken salad",
        image: "https://img.taste.com.au/2wHUPPJD/w316-h210-cfill-q80/taste/2018/09/jerk-chicken-salad-142006-2.jpg",
        price: "16.00",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda harum. Omnis odit maiores cupiditate odio id rem excepturi placeat.",
        category: "salad bowl",
    },
    {
        id: 5,
        name: "spaghetti with spicy bolognese",
        image: "https://img.taste.com.au/t4q0O875/w316-h210-cfill-q80/taste/2016/11/spaghetti-with-spicy-bolognese-63192-1.jpeg",
        price: "18.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad deserunt animi fugiat unde minus?",
        category: "spaghetti bolognese",
    },
    {
        id: 6,
        name: "easy fish tacos",
        image: "https://img.taste.com.au/5rZ_j-d6/w316-h210-cfill-q80/taste/2016/11/easy-fish-tacos-106044-1.jpeg",
        price: "14.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum rem ex. Laboriosam.",
        category: "fish taco",
    },
    {
        id: 7,
        name: "apple and maple pork chops",
        image: "https://img.taste.com.au/dSVtllx9/w316-h210-cfill-q80/taste/2016/11/apple-maple-pork-chops-59031-1.jpeg",
        price: "23.00",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste facilis quisquam quia dicta asperiores?",
        category: "pork chop",
    },
    {
        id: 8,
        name: "sweet potato and black bean salad",
        image: "https://img.taste.com.au/f_54tTc2/w316-h210-cfill-q80/taste/2020/03/sweet-potato-and-black-bean-salad-159355-2.jpg",
        price: "16.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore distinctio nobis aspernatur saepe repellendus culpa cupiditate.",
        category: "salad bowl",
    },
    {
        id: 9,
        name: "leggie loaded spaghetti bolognese",
        image: "https://img.taste.com.au/udKHlsJ2/w316-h210-cfill-q80/taste/2020/09/veggie-loaded-spaghetti-bolognese-976x549-165153-1.jpg",
        price: "18.00",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos omnis esse temporibus iure unde eaque! Voluptas, dolores!",
        category: "spaghetti bolognese",
    },
    {
        id: 10,
        name: "spicy fish tacos",
        image: "https://img.taste.com.au/27T8-GEg/w316-h210-cfill-q80/taste/2016/11/spicy-fish-tacos-54112-1.jpeg",
        price: "14.00",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus enim recusandae expedita eius ducimus minima maiores voluptatum facilis.",
        category: "fish taco",
    },
    {
        id: 11,
        name: "air fryer pork chops",
        image: "https://img.taste.com.au/zrlz-cDJ/w316-h210-cfill-q80/taste/2021/03/air-fryer-pork-chops-170276-1.jpg",
        price: "23.00",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus possimus mollitia voluptatum autem cum labore.",
        category: "pork chop",
    },
    {
        id: 12,
        name: "Thai basil and chicken fried rice",
        image: "https://img.taste.com.au/tRLifzXz/w316-h210-cfill-q80/taste/2016/11/lilydale_thaichickenmincefriedrice-118099-1.jpg",
        price: "15.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos delectus repellat, corrupti quas.",
        category: "chicken and rice",
    },
    {
        id: 13,
        name: "warm japanese rice salad",
        image: "https://img.taste.com.au/f2M1oxyz/w316-h210-cfill-q80/taste/2019/09/warm-japanese-rice-salad-153571-1.jpg",
        price: "16.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum dolores veritatis maxime excepturi voluptas?",
        category: "salad bowl",
    },
    {
        id: 14,
        name: "light summer bolognese",
        image: "https://img.taste.com.au/tbm-Vj7Z/w316-h210-cfill-q80/taste/2016/11/light-summer-bolognese-100107-1.jpeg",
        price: "18.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi dolores reprehenderit delectus corporis.",
        category: "spaghetti bolognese",
    },
    {
        id: 15,
        name: "crispy fish tacos with mango salsa",
        image: "https://img.taste.com.au/EgTcXsBt/w316-h210-cfill-q80/taste/2018/10/crispy-fish-tacos-with-mango-salsa-142042-2.jpg",
        price: "14.00",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda harum. Omnis odit maiores cupiditate odio id rem excepturi placeat.",
        category: "fish taco",
    },
    {
        id: 16,
        name: "maple orange and black pepper glazed pork chops with chilli rice",
        image: "https://img.taste.com.au/vVZUrh4j/w316-h210-cfill-q80/taste/2016/11/maple-orange-and-black-pepper-glazed-pork-chops-with-chilli-rice-104937-1.jpeg",
        price: "23.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad deserunt animi fugiat unde minus?",
        category: "pork chop",
    },
    {
        id: 17,
        name: "one pan herb chicken rice",
        image: "https://img.taste.com.au/1Ou9TL2x/w316-h210-cfill-q80/taste/2017/10/one-pan-herb-chicken-rice-1980x1320-131578-1.jpg",
        price: "15.00",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum rem ex. Laboriosam.",
        category: "chicken and rice",
    },
];
export default recipes;

import recipes from "./recipes.js";

const categoryBtnList = document.querySelector(".btn-container");
const recipeList = document.querySelector(".recipe-container");

window.addEventListener("DOMContentLoaded", () => {
    showCategories();
    showRecipes(recipes);
});

function getfilterCategories() {
    let recipeCategories = ["all"];
    let filterCategories;
    recipes.forEach(({ category }) => {
        recipeCategories.push(category);
    });
    filterCategories = recipeCategories.filter(
        (value, index, array) => array.indexOf(value) === index
    );
    return filterCategories;
}

function showCategories() {
    let categoryBtn = "";
    let filterCategories = getfilterCategories();
    filterCategories.forEach((uniqueCategory) => {
        categoryBtn += `
        <div class="menu-category">
            <input type="radio" name="category" id="${uniqueCategory}" ${
            uniqueCategory === "all" ? "checked" : ""
        }  />
            <label for="${uniqueCategory}" class="filter-btn" data-category="${uniqueCategory}">${uniqueCategory}</label>
        </div>`;
    });
    categoryBtnList.innerHTML = categoryBtn;
    const categoryItems = document.querySelectorAll(".filter-btn");
    categoryItems.forEach((categoryItem) => {
        categoryItem.addEventListener("click", (e) => {
            const currentCategory = e.currentTarget.dataset.category;
            const filterRecipes = recipes.filter(
                (recipe) => currentCategory === recipe.category
            );
            currentCategory === "all"
                ? showRecipes(recipes)
                : showRecipes(filterRecipes);
        });
    });
}

function showRecipes(menuRecipes) {
    let menuRecipe = "";
    menuRecipes.forEach(({ name, image, price, description }) => {
        menuRecipe += `<article class="recipe-card">
                            <img
                                src="${image}"
                                class="recipe-img"
                            />
                            <div class="recipe-info">
                                <div class="recipe-header">
                                    <h2 class="recipe-name">${name}</h2>
                                    <p class="recipe-price">$${price}</p>
                                </div>
                                <p class="recipe-description">${description}</p>
                            </div>
                        </article>`;
    });
    recipeList.innerHTML = menuRecipe;
}

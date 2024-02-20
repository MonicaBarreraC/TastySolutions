import { generateListNumbers } from "./utils.mjs";

function randomRecipeTemplate(recipe, className, text) {
    return `
        <div class="${className}">
            <img
                src="/images/placeholder.jpg"
                alt="${recipe.name}"
            />
            <div>
                ${text}
                <h1><a href="recipe_page/?recipe=${recipe.id}">${recipe.name}</a></h1>
                <p><span class="stars">&#9733&#9733&#9733&#9733&#9734</span> (4.5)</p>
            </div>
        </div>
    `;
}

export default class RecipeHome {
    constructor(nRecipes, dataSource) {
        this.nRecipes = nRecipes;
        this.dataSource = dataSource;
    }
    async init(){
        const data = await this.dataSource.getData();

        // Display Best Rated Recipe
        // Temporal Using a Random Number
        const bestRatedIndex = Math.floor(Math.random() * data.length);
        this.recipe = data[bestRatedIndex];
        const text = "<p>Best Rated Recipe</p>";
        this.renderRecipeDiv(".best-rated", "img-title", text);

        /* Generate n Recipes */
        const listRecipes = generateListNumbers(this.nRecipes, data.length);
        listRecipes.forEach((element) => {
            // Get recipe information
            this.recipe = data[element];
            // Display Information
            this.renderRecipeDiv(".random-recipes", "r-recipe");
        });
    }
    renderRecipeDiv(selector, className, text=""){
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("beforeend", randomRecipeTemplate(this.recipe, className, text));
    }
}
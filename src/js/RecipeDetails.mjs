import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function fullRecipeTemplate(recipe) {
    return `<section class="full-recipe">
          <div class="img-title">
              <img
              src="/images/placeholder.jpg"
              alt="${recipe.name}"
              />
              <div>
                  <h1>${recipe.name}</h1>
                  <p>${recipe.source}</p>
                  <p><span class="stars">&#9733&#9733&#9733&#9733&#9734</span> (4.5)</p>
                  <button id="addToFav" data-id="${recipe.id}">❤️</button>
              </div>
          </div>
          <h3>Ingredients</h3>
              <ul class="recipe__ingredients">
                  ${displayList(recipe.ingredients)}
              </ul>
          <h3>Instructions</h3>
          <p class="recipe__instructions">
              ${recipe.instructions}
          </p>
          </section>`;
}

function displayList(list) {
    let html = "";
    list.forEach((element) => {
      if(element == "<hr>\r" || element == "<hr>") {
        html += element;
      } else {
        html += `<li>${element}</li>`;
      }
    });
    return html;
  }

export default class RecipeDetails {
    constructor(recipeId, dataSource) {
        this.recipeId = recipeId;
        this.recipe = {};
        this.dataSource = dataSource;
    }
    async init() {
        this.recipe = await this.dataSource.findRecipeById(this.recipeId);
        this.renderRecipeDetails("main");
        document.getElementById("addToFav").addEventListener("click", this.addToFav.bind(this));
    }
    renderRecipeDetails(selector){
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("beforeend", fullRecipeTemplate(this.recipe));
    }
    addToFav() {
        let favList = getLocalStorage("fav-recipes") || [];
        let inList = false;
        favList.forEach(element => {
            if(this.recipe.id == element.id) {
                inList = true;
                console.log("It's already a favorite");
            }
        });
        // Not in fav List
        if (inList == false){
            favList.push(this.recipe);
        }
        setLocalStorage("fav-recipes", favList);
    }
}
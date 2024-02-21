import { getLocalStorage } from "./utils.mjs";
import { listRecipeTemplate } from "./RecipeDetails.mjs"

export default class FavListing {
    constructor(key, parentElement){
        this.key = key;
        this.parentElement = parentElement;
    }
    displayFavRecipes(){
        const favRecipes = getLocalStorage(this.key);
        let htmlFavs = "";
        if (favRecipes == null){
            document.querySelector(".fav-list").innerHTML = "This space could use a little love. Add your favorite recipes to brighten it up!";
        } else {
            htmlFavs = favRecipes.map((item) => listRecipeTemplate(item));
            document.querySelector(this.parentElement).innerHTML = htmlFavs.join("");
        }
    }
}
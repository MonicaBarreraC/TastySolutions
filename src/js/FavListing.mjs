import { getLocalStorage } from "./utils.mjs";

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
            htmlFavs = favRecipes.map((item) => favRecipeTemplate(item));
            document.querySelector(this.parentElement).innerHTML = htmlFavs.join("");
        }
    }
}

function favRecipeTemplate(item) {
    const newItem = `
        <li class="fav-card">
            <a href="/recipe_page/?recipe=${item.id}">
                <img 
                src="/images/placeholder_small.jpg"
                alt="${item.name}">
            </a>
            <div>
                <a href="/recipe_page/?recipe=${item.id}">
                    <h2>${item.name}</h2>
                </a>
                <p>${item.tags}</p>
            </div>
            
        </li>`;

    return newItem;
}
import { doc } from "prettier";

const url = "/json/db-recipes.json";

async function convertToJson(res){
    const data = await res.json();
    if (res.ok){
        return data;
    } else {
        throw {name: "servicesError", mesagge: data};
    }
}
async function getData() {
    const response = await fetch(url);
    const data = await convertToJson(response);

    // Get Random Recipe
    const random = getRandomRecipe(data.Result.length);
    console.log(random);
    console.log(data.Result[random]);
    const recipe = data.Result[random];
    console.log(`name: ${recipe.name}`);
    //recipeTemplate(data.Result[])

    const bestRecipe = ".best-rated";
    const bRecipe = document.querySelector(bestRecipe);

    const randomRecipe = ".random-recipes";
    const rRecipe = document.querySelector(randomRecipe);

    //const divRecipes = document.querySelector(selector);

    // Full Recipe
    /*
    element.insertAdjacentHTML(
        "beforeend",
        fullRecipeTemplate(recipe)
      );
    */

    let listRandom = [];
    const n = 3;
    for (let i = 0; i < n; i++) {
        const number = getRandomRecipe(data.Result.length);
        //console.log(number);
        while (listRandom.includes(number)) {
            number = getRandomRecipe(data.Result.length);
            console.log(number);
        }
        listRandom.push(number);
        //console.log(listRandom);
    }
    
    // Random Recipe
    bRecipe.insertAdjacentHTML(
        "beforeend",
        bestRecipeTemplate(recipe)
    );
    listRandom.forEach(element => {
        insertRecipe(rRecipe, data.Result[element]);
    });
    /*insertRecipe(rRecipe, data.Result[1]);
    insertRecipe(rRecipe, data.Result[2]);
    insertRecipe(rRecipe, data.Result[3]);*/

    console.log(data.Result);
    //return data.Result;
}

function insertRecipe(element, recipe){
    element.insertAdjacentHTML(
        "beforeend",
        randomRecipeTemplate(recipe)
    );
}

function getRandomRecipe(max) {
    const random =  Math.floor(Math.random() * max);
    //console.log(random);
    return random;
}

function displayList(list){
    let html = "";
    list.forEach(element => {
        if(element == "<hr>\r"){
            html += element;
        } else {
            html += `<li>${element}</li>`;
        }
    });
    return html;
}

function fullRecipeTemplate(recipe){
    
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

function randomRecipeTemplate(recipe){
    return `
        <div class="r-recipe">
            <img
            src="/images/placeholder.jpg"
            alt="${recipe.name}"
            />
            <div>
                <h1><a href="">${recipe.name}</a></h1>
                <p><span class="stars">&#9733&#9733&#9733&#9733&#9734</span> (4.5)</p>
            </div>
        </div>
        `;
}

function bestRecipeTemplate(recipe){
    return `
        <div class="img-title">
            <img
            src="/images/placeholder.jpg"
            alt="${recipe.name}"
            />
            <div>
                <p>Best Rated Recipe</p>
                <h1><a href="">${recipe.name}</a></h1>
                <p><span class="stars">&#9733&#9733&#9733&#9733&#9734</span> (4.5)</p>
            </div>
        </div>
        `;
}

getData();

/*⭐⭐⭐⭐⭐
<p class="recipe__tags">${recipe.tags}</p>
<section class="recipe-details">

<h1><a href="/recipe_pages/index.html?recipe=ID">${recipe.name}</a></h1>
*/
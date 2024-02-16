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

    const selector = "main";
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
        "beforeend",
        recipeTemplate(recipe)
      );

    console.log(data.Result);
    //return data.Result;
}

function getRandomRecipe(max) {
    const random =  Math.floor(Math.random() * max);
    //console.log(random);
    return random;
}

function recipeTemplate(recipe){
    
    return `<section class="recipe-details">
        <img
            src=""
            alt="${recipe.name}"
        />
        <h1>${recipe.name}</h1>
        <p>${recipe.source}</p>
        <p class="recipe__tags">${recipe.tags}</p>
        <p class="recipe__ingredients">
            ${recipe.ingredients}
        </p>
        <p class="recipe__instructions">
            ${recipe.instructions}
        </p>
        <div class="recipe-fav__add">
        <button id="addToFav" data-id="${recipe.id}">❤️</button>
        </div>
    </section>`;
}

getData();


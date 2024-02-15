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
    console.log(data.Result);
    //return data.Result;
}

function recipeTemplate(recipe){
    
    return `<section class="recipe-details">
        <h3>${recipe.name}</h3>
        <h2>${recipe.source}</h2>
        <img
        src=""
        alt="${recipe.name}"
        />
        <p class="recipe__tags">${recipe.tags[0]}</p>
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


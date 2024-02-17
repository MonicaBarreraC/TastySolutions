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
        fullRecipeTemplate(recipe)
      );

    console.log(data.Result);
    //return data.Result;
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

getData();

/*⭐⭐⭐⭐⭐
<p class="recipe__tags">${recipe.tags}</p>
<section class="recipe-details">*/
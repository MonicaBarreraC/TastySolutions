import { listRecipeTemplate } from "./RecipeDetails.mjs";

export default class searchListing {
    constructor(dataSource){
        this.dataSource = dataSource;
    }
    async init() {
        this.data = await this.dataSource.getData();
        this.displayListRecipes(this.data);
        //document.getElementById("search-bar").addEventListener("keyup", testFunction);
        document.getElementById("search-bar").addEventListener("keyup", function(){
            testFunction();
        });
    }
    displayListRecipes(list){
        let htmlList = "";
        const parentElement = ".recipes-list";
        if (list == null){
            document.querySelector(".recipes-list").innerHTML = "No recipes found";
        } else {
            htmlList = list.map((item) => listRecipeTemplate(item));
            document.querySelector(parentElement).innerHTML = htmlList.join("");
        }
    }
}

function testFunction(){
    // Get Value from Search Bar
    let value = document.querySelector("#search-bar").value;
    value = value.toLowerCase();
    console.log(value);


}
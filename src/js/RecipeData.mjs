async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError", mesagge: data };
    }
}

export default class RecipeData {
    constructor() {
        this.path = "/json/db-recipes.json";
    }
    async getData() {
        const response = await fetch(this.path);
        const data = await convertToJson(response);
        return data.Result;
    }
    async findRecipeById(id) {
        const recipes = await this.getData();
        return recipes.find((item => item.id === id));
    }
}
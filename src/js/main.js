import RecipeData from "./RecipeData.mjs";
import RecipeHome from "./RecipeHome.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new RecipeData();
const nRecipes = 3;

const home = new RecipeHome(nRecipes, dataSource);
home.init();

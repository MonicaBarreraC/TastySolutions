import RecipeDetails from "./RecipeDetails.mjs";
import RecipeData from "./RecipeData.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const recipeId = getParam("recipe");
const dataSource = new RecipeData();

const recipe = new RecipeDetails(recipeId, dataSource);
recipe.init();

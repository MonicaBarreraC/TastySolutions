import { loadHeaderFooter } from "./utils.mjs";
import RecipeData from "./RecipeData.mjs";
import searchListing from "./searchListing.mjs";

loadHeaderFooter();

const dataSource = new RecipeData();
const search = new searchListing(dataSource);

search.init();

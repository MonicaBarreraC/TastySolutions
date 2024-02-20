import { loadHeaderFooter } from "./utils.mjs";
import FavListing from "./FavListing.mjs";

loadHeaderFooter();
const favorites = new FavListing("fav-recipes", ".fav-list");

favorites.displayFavRecipes();

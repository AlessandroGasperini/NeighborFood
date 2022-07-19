import { combineReducers } from "redux"
import { portionCountReducer } from "./portionCountReducer"
import { fetchProductsReducer } from "./fetchProductsReducer"
import { chosenRecipeReducer } from "./chosenRecipeReducer"
import { myFavouritesReducer } from "./myFavouritesReducer"
import { addRecipeReducer } from "./addRecipeReducer"


const allReducers = combineReducers({
   fetchData: fetchProductsReducer,
   chosenRecipe: chosenRecipeReducer,
   myFavourites: myFavouritesReducer,
   addRecipe: addRecipeReducer,
   portionCount: portionCountReducer,

})

export default allReducers
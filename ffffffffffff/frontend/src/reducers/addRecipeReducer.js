export const addRecipeReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_RECIPE":
            return {
                ...state,
                newRecipe: action.payload
            }
            default:
                return state
    }
}
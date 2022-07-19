const initialState = {
    chosenRecipe: null
}

export const chosenRecipeReducer = (state = initialState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case "CHOSEN_RECIPE":
            newState.chosenRecipe = action.payload;
            return newState
        default:
            return state
    }
}
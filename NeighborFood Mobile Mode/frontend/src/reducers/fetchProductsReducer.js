let initialState = {
    allRecipes: []
}

export const fetchProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state, allRecipes: action.payload
            }
            default:
                return state
    }

}
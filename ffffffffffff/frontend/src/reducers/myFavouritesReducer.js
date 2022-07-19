const initialState = {
    favorites: []
}


export const myFavouritesReducer = (state = initialState, action) => {
    const newState = {
        ...state
    };
    switch (action.type) {
        case "ADD_FAVOURITES":
            // Samma recept kan inte läggas till två gånger i favoriter
            let index = state.favorites.findIndex(el => el.id == action.payload.id);
            if (index == -1)
                newState.favorites.push(action.payload);
            return newState
        case "REMOVE_FAVORITE":
            newState.favorites = newState.favorites.filter(favorite => favorite.id !== action.payload);
            return newState;
        default:
            return state
    }
}
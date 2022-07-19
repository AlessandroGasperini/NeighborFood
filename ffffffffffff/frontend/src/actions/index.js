export const setProducts = (data) => {
    return {
        type: "SET_PRODUCTS",
        payload: data

    }
}

export const chosenRecipe = (chosenRecipe) => {
    return {
        type: "CHOSEN_RECIPE",
        payload: chosenRecipe

    }
}

export const addToFavourites = (recipe) => {
    return {
        type: "ADD_FAVOURITES",
        payload: recipe

    }
}

export const removeFromFavourites = (recipe) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: recipe

    }
}

export const addRecipe = (recipe) => {
    return {
        type: "ADD_RECIPE",
        payload: recipe

    }
}

export const addPortion = () => {
    return {
        type: "ADD_PORTION"
    }
}

export const decreasePortion = () => {
    return {
        type: "DECREASE_PORTION"
    }
}
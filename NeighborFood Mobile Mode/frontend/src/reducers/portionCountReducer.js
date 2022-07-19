// Används inte globalt men kul att göra så mycket som möjligt i Redux
export const portionCountReducer = (state = 1, action) => {
    switch (action.type) {

        case "ADD_PORTION":
            return state + 1;

        case "DECREASE_PORTION":
            return state - 1;

        default:
            return state;
    }
}
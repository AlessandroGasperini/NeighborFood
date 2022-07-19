import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { chosenRecipe } from '../actions';
import styles from "./OneRecipe.module.css"

//Varje recept som mappas ut vid sökning
export default function OneRecipe(props) {
    const dispatch = useDispatch()
    return (
        <Link className={styles.theRecipeLink} to={"/chosenRecipe"}>
            <h3 className={styles.recipeNames} onClick={() => dispatch(chosenRecipe(props.recipe))}>{props.recipe.name}</h3>
        </Link>
    )
}
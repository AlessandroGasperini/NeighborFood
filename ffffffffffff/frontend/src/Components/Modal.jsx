import React from "react";
import styles from "./Modal.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../actions";

export default function Modal(props) {

    const dispatch = useDispatch()

    console.log(props);
    // Modal som kommer upp när man klickar på skapa recept
    // Här får du valet om du vill skapa ett till eller gå tillbaka till startsidan
    return (
        <section className={styles.modalContainer}>
            <article className={styles.popUp}>
                <h2>Tack för att du delar med dig!</h2>
                <h3>{props.newRecipe.name}</h3>
                <img className={styles.img} src={props.newRecipe.img} alt="" />
                <article className={styles.btns}>
                    <Link to={"/"}><button >Tillbaka till start</button></Link>
                    <button onClick={() => window.location.reload()}>Skapa fler recept</button>
                </article>
            </article>
        </section>
    )
}
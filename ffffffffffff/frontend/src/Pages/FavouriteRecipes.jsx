import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import { useSelector } from "react-redux";
import styles from "./FavouriteRecipes.module.css"
import FavouriteCard from '../Components/FavouriteCard';


export default function FavouriteRecipes() {

  // hämtar tillagda favoriter från store
  const favouritList = useSelector(state => state.myFavourites.favorites)

  return (
    <section className={styles.container}>
      <h1>My favs</h1>

      <article className={favouritList.length === 0 ? `${styles.categoryNone}` : `${styles.categoryColor}`}>
        <p className={styles.green}>Vegan</p>
        <p className={styles.blue}>Vegetarisk</p>
        <p className={styles.red}>Animalisk</p>
      </article>

      <article className={(favouritList.length === 0) ? `${styles.emptyList}` : `${styles.hideEmpty}`}>
        <h5>Du har inga favoriter än</h5>
        <h6>Prova vår<br /><span>Hangry Generator</span><br />för insperation</h6>
        <Link to={"/HangryGenerator"}>
          <button>Hangry Generator</button>
        </Link>
      </article>

      {
        favouritList.map((favourite, id) => (
          <FavouriteCard key={id} favourite={favourite} />
        ))}

      <Link to={"/"}>
        <svg className={styles.backBtn} width="254" height="228" viewBox="0 0 254 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M53 140.979C52.5017 140.993 52.0017 141 51.5 141C23.0573 141 0 117.943 0 89.5C0 61.0573 23.0573 38 51.5 38C60.9459 38 69.7979 40.5431 77.4086 44.9819C80.6122 19.6165 102.265 0 128.5 0C154.211 0 175.522 18.8413 179.378 43.47C186.331 39.9705 194.185 38 202.5 38C230.943 38 254 61.0573 254 89.5C254 117.943 230.943 141 202.5 141C201.998 141 201.498 140.993 201 140.979V228H53V140.979ZM194.703 168L154 135L113.297 168H117V220H191V168H194.703Z" fill="#084F54" />
        </svg>
      </Link>
    </section>
  )
}


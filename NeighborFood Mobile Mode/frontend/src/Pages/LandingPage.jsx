import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OneRecipe from '../Components/OneRecipe';
import styles from "./LandingPage.module.css"


export default function LandingPage() {

  // State som håller värdet från inputfältet
  const [searchValue, setSearchValue] = useState("")
  // Hämtar alla recept
  const allRecipes = useSelector((state) => state.fetchData.allRecipes)
  // Hämtar det nya tillagda receptet
  const confirmedNewRecipe = useSelector((state) => state.addRecipe.newRecipe)

  // Om det har skapats ett nytt recept så uppdateras sidan så att allRecipes uppdateras
  if (confirmedNewRecipe) {
    window.location.reload()
  }



  return (
    <section className={styles.container}>
      <article className={styles.nameAndFav}>
        <Link to={"/favouriteRecipes"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="53" viewBox="0 0 41 53" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.1231 36.1725C58.3022 11.2029 31.365 -7.90695 20.5 3.26611C9.63168 -7.90695 -17.3056 11.2029 18.8769 36.1725L18.1017 37.7227C18.053 37.8202 18.024 37.9263 18.0162 38.0349C18.0085 38.1436 18.0223 38.2527 18.0567 38.3561C18.1263 38.5648 18.2759 38.7373 18.4727 38.8357C18.6695 38.9341 18.8973 38.9503 19.1061 38.8807C19.3148 38.8112 19.4873 38.6615 19.5857 38.4647L19.7182 38.1997C19.7481 38.7629 19.7977 39.2432 19.8872 39.6904C20.1124 40.8299 20.5762 41.7507 21.3712 43.3407L21.4142 43.4335C22.1165 44.8314 22.0171 46.2491 21.5799 47.5609C21.1327 48.8925 20.3675 50.0485 19.811 50.8833C19.6889 51.066 19.6444 51.2898 19.6872 51.5054C19.7301 51.7209 19.8568 51.9106 20.0396 52.0327C20.2223 52.1549 20.446 52.1994 20.6616 52.1565C20.8772 52.1136 21.0669 51.9869 21.189 51.8042L21.2022 51.781C21.7521 50.9595 22.6299 49.6411 23.15 48.0875C23.68 46.5009 23.8522 44.6061 22.8982 42.6915C22.0436 40.9855 21.6892 40.2667 21.5103 39.3657C21.4499 39.0494 21.409 38.7297 21.3877 38.4084L21.4142 38.4647C21.5126 38.6615 21.6852 38.8112 21.8939 38.8807C22.1026 38.9503 22.3305 38.9341 22.5272 38.8357C22.724 38.7373 22.8737 38.5648 22.9432 38.3561C23.0128 38.1473 22.9966 37.9195 22.8982 37.7227L22.1198 36.1725H22.1231ZM16.2799 4.20355C12.4142 2.18292 7.00486 3.73317 4.83849 7.96324C4.05343 9.49692 3.64599 11.5407 4.16936 14.0914C4.35155 14.9857 5.7163 14.7439 5.91505 13.8562C6.85911 9.69567 9.81386 5.7008 15.8161 5.48217C16.5912 5.45567 16.9689 4.5613 16.2799 4.20355V4.20355Z" fill="black" />
          </svg>
        </Link>
      </article>

      <svg width="254" height="228" viewBox="0 0 254 228" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M53 140.979C52.5017 140.993 52.0017 141 51.5 141C23.0573 141 0 117.943 0 89.5C0 61.0573 23.0573 38 51.5 38C60.9459 38 69.7979 40.5431 77.4086 44.9819C80.6122 19.6165 102.265 0 128.5 0C154.211 0 175.522 18.8413 179.378 43.47C186.331 39.9705 194.185 38 202.5 38C230.943 38 254 61.0573 254 89.5C254 117.943 230.943 141 202.5 141C201.998 141 201.498 140.993 201 140.979V228H53V140.979ZM194.703 168L154 135L113.297 168H117V220H191V168H194.703Z" fill="#826C52" />
      </svg>

      <h1>NeighborFood</h1>

      <section>
        <h4>Sök recept</h4>

        <article className={styles.inputAndResults}>
          <input className={styles.searchField} onChange={({ target: { value } }) => setSearchValue(value)} type="text" />


          <article className={(searchValue.length === 0) ? `${styles.hideAllRecipes}` : `${styles.searchedRecipes}`}>

            {/* Filtrerar all recept och mappa igenom de recept som matchar med inputvärdet */}
            {
              allRecipes ?
                allRecipes.filter((recipe) => {

                  if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return recipe
                  }
                })
                  .map((recipe, id) => (
                    <OneRecipe recipe={recipe} key={id} />
                  )) : null
            }

          </article>
        </article>
        {/* Knapp som tar dig till sidan där du skapar ditt egna recept */}

        <article className={styles.btnContainer}>
          <Link to={"/createRecipe"}>
            <button>Skapa recept</button>
          </Link>
          <Link to={"/hangryGenerator"}>
            <button className={styles.rouletteBtn}>Roulette</button>
          </Link>
        </article>
      </section>
    </section>
  )
}







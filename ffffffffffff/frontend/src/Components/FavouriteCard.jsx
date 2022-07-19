import { useDispatch } from "react-redux";
import { removeFromFavourites } from '../actions';
import styles from "./FavouriteCard.module.css"
import { Link } from "react-router-dom";
import { chosenRecipe } from "../actions";

export default function FavouriteCard(props) {
  // Destruct props
  const { name, chef, id, img, category } = props.favourite

  const dispatch = useDispatch()

  // Skickar med id på de recept vi vill ta bort
  function removeRecipe() {
    dispatch(removeFromFavourites(id))
  }

  // Sätter färg på FavouriteCart beroende på om receptet är veganskt, vegetariskt eller innehåller kött 
  let colorClass = `${styles.veg}`
  if (category === "Vegansk") {
    colorClass = `${styles.vegan}`
  } else if (category === "Animaliska produkter") {
    colorClass = `${styles.animal}`
  }


  return (

    <article className={styles.container}>
      <Link className={styles.link} to={"/chosenRecipe"}>
        <section className={colorClass} >
          {/* Här kan du gå in på receptet från favoritsidan */}
          <article onClick={() => dispatch(chosenRecipe(props.favourite))}>
            <span>{chef + "s "}</span>
            <h2>{name}</h2>
          </article>
          <img src={img} alt="" />
        </section>
      </Link>
      <svg onClick={() => removeRecipe(id)} width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.1366 3H29.4789L30.9348 7H16.6808L18.1366 3ZM30.0463 1.00105C30.5011 0.940871 30.9528 1.2017 31.1162 1.65073L33.0631 7H46C47.1046 7 48 7.89543 48 9C48 10.1046 47.1046 11 46 11H2C0.895386 11 0 10.1046 0 9C0 7.89543 0.895386 7 2 7H14.5524L16.4957 1.66064C16.6769 1.16313 17.2115 0.896636 17.7128 1.04185C17.8037 1.01462 17.9001 0.999999 18 0.999999H30C30.0155 0.999999 30.0309 1.00035 30.0463 1.00105ZM44.8257 13.3473C43.7379 13.1555 42.7006 13.8818 42.5088 14.9696L34.5687 60H14C13.9404 60 13.8815 60.0026 13.8232 60.0077L5.88879 15.0097C5.69702 13.9219 4.65967 13.1956 3.5719 13.3874C2.48413 13.5792 1.75781 14.6165 1.94958 15.7043L10.1111 61.9903C10.3029 63.0781 11.3402 63.8044 12.428 63.6126C12.4763 63.6041 12.5238 63.5939 12.5706 63.5821C12.6217 63.5693 12.672 63.5545 12.7213 63.5379C13.068 63.8264 13.5137 64 14 64H36C36.7244 64 37.3586 63.615 37.7096 63.0385C38.0017 62.7556 38.2104 62.3812 38.2865 61.9502L46.448 15.6642C46.6398 14.5764 45.9135 13.5391 44.8257 13.3473ZM23 20C23 19.4477 23.4478 19 24 19C24.5522 19 25 19.4477 25 20V57C25 57.5523 24.5522 58 24 58C23.4478 58 23 57.5523 23 57V20ZM33.3953 19.0872C32.8451 19.039 32.36 19.446 32.3119 19.9962L29.0872 56.8554C29.0389 57.4056 29.446 57.8906 29.9962 57.9388C30.5464 57.9869 31.0314 57.5799 31.0795 57.0297L34.3043 20.1705C34.3524 19.6203 33.9454 19.1353 33.3953 19.0872ZM14.0872 20.1705C14.0391 19.6203 14.446 19.1353 14.9962 19.0872C15.5464 19.039 16.0314 19.446 16.0796 19.9962L19.3043 56.8554C19.3524 57.4056 18.9454 57.8906 18.3953 57.9388C17.8451 57.9869 17.3601 57.5799 17.3119 57.0297L14.0872 20.1705Z" fill="black" />
      </svg>
    </article>
  )
}
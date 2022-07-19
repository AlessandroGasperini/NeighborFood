import { useState } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { addRecipe } from "../actions"
import { Link } from "react-router-dom"
import styles from "./CreateRecipe.module.css"
import { useEffect } from "react"
import Modal from "../Components/Modal"


export default function CreateRecipe() {

    const dispatch = useDispatch()

    // Tomma states som fyll i av respektive input
    const [recipeName, setRecipeName] = useState("")
    const [chefName, setChefName] = useState("")
    const [img, setImg] = useState("")
    const [time, setTime] = useState("")
    const [ingredientName, setIngredientName] = useState("")
    const [category, setCategory] = useState("")
    const [ingredientAmount, setIngredientAmount] = useState("")
    const [measurement, setMeasurement] = useState("")
    const [description, setDescription] = useState("")
    const [confirmAndCreate, SetConfirmAndCreate] = useState(false)

    // Sätter id på de tillagda receptet
    const allRecipes = useSelector((state) => state.fetchData.allRecipes)
    const theID = allRecipes.length + 1;

    // Skapar ett nytt object som ska läggas till i mitt API (tomt)
    const [newRecipe, setNewRecipe] = useState({
        id: theID,
        name: "",
        chef: "",
        img: "",
        time: "",
        portions: 1,
        category: "",
        ingredients: [{
            id: 0,
            name: "",
            amount: 0,
            measurement: ""
        }],
        description: ""
    })





    // Tar kopia av gamla statet: NewRecipe och fyller i med nya värden vid onClick på skapa recept
    // För tillfället kan bara en ingrediens läggas in i statet NewRecipe men det ska jag fortsätta med efter kursen :)
    const confirmRecipe = () => {

        setNewRecipe({
            ...newRecipe,
            id: theID,
            name: recipeName,
            chef: chefName,
            img: img,
            time: time,
            category: category,
            ingredients: [{
                name: ingredientName,
                amount: ingredientAmount,
                measurement: measurement
            }],
            description: description
        })
    }



    // Tillåter dig inte att dispatcha nya receptet utan att godkänna villkoren (triggas när newRecipe uppdateras)
    // Nu gör jag en POST med newRecipe objectet och använder inte receptet från store men uppdate kommer på det...
    //...senare där jag ska göra en popUp på landigPage med "se nya recept" :) om du ville veta det av någon anledning
    useEffect(() => {
        if (confirmAndCreate === "on") {
            dispatch(addRecipe(newRecipe))

            addRecipeToJson(newRecipe)
        }
    }, [newRecipe])

    // Deklarerar modalen som false tills man skapat recept 
    const [modal, setModal] = useState(false)


    function confirm() {
        // Ger en alert om man inte fyllt i obligatoriska fält
        if (recipeName !== "" && img !== "" && category !== "" && description !== "") {
            // Sätter nya receptet
            confirmRecipe()
            // Modal visas
            setModal(true)

        } else {
            alert("Fyll i de *obligatoriska fälten")
        }
    }

    // StateArr med en siffra i som ska motsvara hur många ingrediens som lagts till
    // Den mappas igenom och skapar en "ingrediens input"
    const [mapIngredientInputs, setMapIngredientInputs] = useState([1])

    // När man klickar på lägg till ingrediens så läggs en till 1a in i Arr och mappas då igen 
    // vilket gör att ett till input fält läggs till
    let newIngredient = [1]
    function add() {
        setMapIngredientInputs(mapIngredientInputs.concat(newIngredient))
        setIngredientId(ingredientId + 1)
        newRecipe.ingredients.push(addIngrediend)
    }

    const [ingredientId, setIngredientId] = useState(0)

    let addIngrediend = {
        id: ingredientId,
        name: "",
        amount: 0,
        measurement: ""
    }





    console.log(newRecipe.ingredients);
    function addRecipeToJson(newRecipe) {
        fetch("http://localhost:4000/api_post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
    }


    return (

        <section className={styles.container}>

            <h1>Bidra med ditt recept</h1>
            <input className={styles.textInput} onChange={(e) => setRecipeName(e.target.value)} type="text" placeholder="Maträtt *" />
            <input className={styles.textInput} onChange={(e) => setChefName(e.target.value)} type="text" placeholder="Ditt namn" />
            <input className={styles.textInput} onChange={(e) => setImg(e.target.value)} type="text" placeholder="bild url *" />
            <section>

                <section className={styles.timeAndCategory} >
                    <select className={styles.time} onChange={(e) => setTime(e.target.value)} name="time" id="time">
                        <option value="">Tid</option>
                        <option value="Under 30 min">Under 30 min</option>
                        <option value="Under 1 timme">Under 1 timme</option>
                        <option value="Över 1 timme">Över 1 timme</option>
                    </select>

                    <select className={styles.category} onChange={(e) => setCategory(e.target.value)} id="">
                        <option value="">Kategori *</option>
                        <option value="Vegansk">Vegansk</option>
                        <option value="Vegetarisk">Vegetarisk</option>
                        <option value="Animaliska produkter">Animaliska produkter</option>
                    </select>
                </section>
            </section>

            {/* Modal som tar över sidan vid skapat recept */}
            {modal && <Modal newRecipe={newRecipe} />}

            {
                // hät mappas Arr  mapIngredientInputs igenom
                mapIngredientInputs.map((inputs, id) => (
                    <section key={id}>
                        <article className={styles.ingredientBox}>
                            <input className={styles.ingredient} onChange={(e) => setIngredientName(e.target.value)} type="text" placeholder="Ingrediens" />
                            <input className={styles.amount} onChange={(e) => setIngredientAmount(e.target.value)} type="number" placeholder="antal" />
                            <select className={styles.measurment} onChange={(e) => setMeasurement(e.target.value)} name="measurement" id="">
                                <option value="">Mått</option>
                                <option value="st">st</option>
                                <option value="dl">dl</option>
                                <option value="cl">cl</option>
                                <option value="ml">ml</option>
                                <option value="msk">msk</option>
                                <option value="tsk">tsk</option>
                                <option value="krm">krm</option>
                                <option value="g">g</option>
                                <option value="knippe">knippe</option>
                            </select>
                        </article>
                    </section>
                ))
            }
            {/* Lägger till ingrediens */}
            <button onClick={() => add()} className={styles.addIngredient}>Lägg till Ingrediens</button>

            <article className={styles.descriptionContainer}>
                <textarea className={styles.description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" placeholder="Såhär gör du *"></textarea>
            </article>

            <section className={styles.confirmAndCreate}>
                <article className={styles.confirmCheckbox}>
                    <h3>Godkänn</h3>
                    <input className={styles.checkbox} type="checkbox" onChange={(e) => SetConfirmAndCreate(e.target.value)} />
                </article>
                <button className={confirmAndCreate === false ? `${styles.hideBtn}` : `${styles.createBtn}`} onClick={() => confirm()}>Skapa Recept</button>
            </section>
            <Link to={"/"}>
                <svg className={styles.backBtn} width="254" height="228" viewBox="0 0 254 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M53 140.979C52.5017 140.993 52.0017 141 51.5 141C23.0573 141 0 117.943 0 89.5C0 61.0573 23.0573 38 51.5 38C60.9459 38 69.7979 40.5431 77.4086 44.9819C80.6122 19.6165 102.265 0 128.5 0C154.211 0 175.522 18.8413 179.378 43.47C186.331 39.9705 194.185 38 202.5 38C230.943 38 254 61.0573 254 89.5C254 117.943 230.943 141 202.5 141C201.998 141 201.498 140.993 201 140.979V228H53V140.979ZM194.703 168L154 135L113.297 168H117V220H191V168H194.703Z" fill="#484A4A" />
                </svg>
            </Link>
        </section>
    )
}


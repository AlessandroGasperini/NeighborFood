import './App.css';
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TheRecipie from './Pages/ChosenRecipe';
import FavouriteRecipes from './Pages/FavouriteRecipes';
import CreateRecipe from './Pages/CreateRecipe';
import HangryGenerator from './Pages/HangryGenerator';
import { setProducts } from './actions';
import { useDispatch } from "react-redux";
import axios from 'axios';


function App() {

  const dispatch = useDispatch()

  // API med data.json
  const url = `http://localhost:4000/data.json`;


  // Fetchar API med hjälp av axios. Funktionen kallas på via useEffect() när sidan renderas
  useEffect(() => {
    fetchProducts()
  }, []);

  // Axios fetch 
  const fetchProducts = async () => {
    const response = await axios.get(url)
      .catch((err) => {
        console.log("ERROR", err);

      })
    // Skickar datan från API till store
    dispatch(setProducts(response.data));
  }

  return (
    <Router>
      <main>
        <Link to="/"></Link>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/chosenRecipe" element={<TheRecipie />} />
          <Route exact path="/favouriteRecipes" element={<FavouriteRecipes />} />
          <Route exact path="/createRecipe" element={<CreateRecipe />} />
          <Route exact path="/hangryGenerator" element={<HangryGenerator />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

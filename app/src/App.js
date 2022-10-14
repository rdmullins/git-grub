// Imports go Here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Splash from "./Splash";
import MenuCard from "./MenuCard";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Specials from "./Specials";
import Footer from "./Footer";

// Global variables to hold sorted returned API data for use by components

let appetizers = [];
let breakfast = [];
let brunch = [];
let lunch = [];
let dinner = [];
let sides = [];
let desserts = [];


function menuParser(menu) {
  //console.log("This is the menuParser() function.")

  appetizers = menu.filter(dish => dish.category.title === "Appetizer");
  breakfast = menu.filter(dish => dish.category.title === "Breakfast");
  lunch = menu.filter(dish => dish.category.title === "Lunch");
  dinner = menu.filter(dish => dish.category.title === "Dinner");
  desserts = menu.filter(dish => dish.category.title === "Dessert");
  brunch = menu.filter(dish => dish.category.title === "Brunch");
  sides = menu.filter(dish => dish.category.title === "Side");

}

function App() {

const [menuData, setMenuData] = useState([]);
const [page, setPage] = useState(0);
//console.log(menuData);

useEffect(() => {
  let endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/"
  axios.get(endpoint)
    .then((response)=> setMenuData(response.data))
},[]);

    //console.log("Inside App function.");
    //const [post] = React.useState(null);
    
    menuParser(menuData);

    if (menuData.length === 0) return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      );

    return (
      <div className="container">
        {(page === 0) && <Splash pageUpdater={setPage} />}
        {(page > 0 && page < 8) && <Navbar pageUpdater={setPage} />}
        {(page === 1) && <MenuCard menuData={appetizers} pageUpdater={setPage} />}
        {(page === 2) && <MenuCard menuData={breakfast} pageUpdater={setPage} />}
        {(page === 3) && <MenuCard menuData={brunch} pageUpdater={setPage} />}
        {(page === 4) && <MenuCard menuData={lunch} pageUpdater={setPage} />}
        {(page === 5) && <MenuCard menuData={dinner} pageUpdater={setPage} />}
        {(page === 6) && <MenuCard menuData={sides} pageUpdater={setPage} />}
        {(page === 7) && <MenuCard menuData={desserts} pageUpdater={setPage} />}
        {(page === 8) && <Menu pageUpdater={setPage} />}
        {(page === 9) && <Specials pageUpdater={setPage} />}
        {(page > 0 && page <8) && <Footer />}
      </div>
    );
  }
  
  export default App;
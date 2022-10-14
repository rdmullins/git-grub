// Imports go Here
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
let specials = [];


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

function getSpecials() {
  specials = [];
  let app = appetizers[Math.floor(Math.random() * appetizers.length)];
  //console.log("Appetizer course is: ", app);

  let mains = breakfast.concat(brunch).concat(lunch).concat(dinner);
  let main = mains[Math.floor(Math.random() * mains.length)];
  //console.log("Main course is: ", mains);

  let side = sides[Math.floor(Math.random() * sides.length)];
  //console.log("Side dish is: ", side);

  let dessert = desserts[Math.floor(Math.random() * desserts.length)];
  //console.log("Dessert is: ", dessert);

  specials = specials.concat(app).concat(main).concat(side).concat(dessert);
  //console.log("Specials are: ", specials);

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
    getSpecials();

    if (menuData.length === 0) return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      );

    return (
      <div className="container">
        {(page === 0) && <Splash pageUpdater={setPage} />}
        {(page > 0 && page != 8) && <Navbar pageUpdater={setPage} />}
        {(page === 1) && <MenuCard page={page} menuData={appetizers} pageUpdater={setPage} />}
        {(page === 2) && <MenuCard page={page} menuData={breakfast} pageUpdater={setPage} />}
        {(page === 3) && <MenuCard page={page} menuData={brunch} pageUpdater={setPage} />}
        {(page === 4) && <MenuCard page={page} menuData={lunch} pageUpdater={setPage} />}
        {(page === 5) && <MenuCard page={page} menuData={dinner} pageUpdater={setPage} />}
        {(page === 6) && <MenuCard page={page} menuData={sides} pageUpdater={setPage} />}
        {(page === 7) && <MenuCard page={page} menuData={desserts} pageUpdater={setPage} />}
        {(page === 8) && <Menu pageUpdater={setPage} />}
        {(page === 9) && <Specials menuData={specials} pageUpdater={setPage} />}
        {(page > 0 && page != 8) && <Footer />}
      </div>
    );
  }
  
  export default App;
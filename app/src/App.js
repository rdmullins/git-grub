// Imports go Here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Splash from "./Splash";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// Global variable to hold sorted returned API data for use by components

let appetizer = [];
let breakfast = [];
let lunch = [];
let dinner = [];
let desserts = [];
let brunch = [];
let sides = [];

function menuParser(menu) {
  //console.log("This is the menuParser() function.")

  appetizer = menu.filter(dish => dish.category.title === "Appetizer");
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
      <>
        {(page == 0) && <Splash pageUpdater={setPage} />}
        {(page > 0) && <Navbar pageUpdater={setPage} />}
        {(page == 1) && <MenuCard menuData={dinner} />}
        {(page == 2) && <h1>This is page 2.</h1>}


      </>
    );
  }
  
  export default App;
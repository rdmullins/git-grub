// Imports go Here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Splash from "./Splash";
import MenuCard from "./MenuCard";

let parsedMenuData = []; // Global variable to hold sorted returned API data for use by components

function menuParser(menu) {
  //console.log("This is the menuParser() function.")

  //menu.forEach(dish => console.log(dish));

  const appetizer = menu.filter(dish => dish.category.title === "Appetizer");
  const breakfast = menu.filter(dish => dish.category.title === "Breakfast");
  const lunch = menu.filter(dish => dish.category.title === "Lunch");
  const dinner = menu.filter(dish => dish.category.title === "Dinner");
  const desserts = menu.filter(dish => dish.category.title === "Dessert");
  const brunch = menu.filter(dish => dish.category.title === "Brunch");
  const sides = menu.filter(dish => dish.category.title === "Side");

  // parsedMenuData.push(appetizer);
  // parsedMenuData.push(breakfast);
  // parsedMenuData.push(lunch);
  // parsedMenuData.push(dinner);
  // parsedMenuData.push(desserts);
  // parsedMenuData.push(brunch);
  // parsedMenuData.push(sides);

  console.log(parsedMenuData);

  // console.log("Appetizers: ", appetizer);
  // console.log("Breakfast:", breakfast);
  // console.log("Lunch: ", lunch);
  // console.log("Dinner: ", dinner);
  // console.log("Desserts: ", desserts);
  // console.log("Brunch: ", brunch);
  // console.log("Sides: ", sides);
}

function App() {

const [menuData, setMenuData] = useState([]);
console.log(menuData);
useEffect(() => {
  let endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/"
  axios.get(endpoint)
    .then((response)=> setMenuData(response.data))
},[]);

  // async function getData() {
  //   console.log("Inside getData().");
  //   // let endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/"
  //   // let response = await axios.get(endpoint);
  //   console.log(response.data);
  //   return response.data;
  // };

  

    //let MenuData = getData();
    //SortDishesIntoCategories(MenuData);
  
    //let state = 1;
    console.log("Inside App function.");
    //const [post] = React.useState(null);

    menuParser(menuData);

    return (
      <>
        <Splash />
        <h1>Dinner</h1>
        {parsedMenuData.dinner}
        <MenuCard menu={parsedMenuData} />
      </>
    );
  }
  
  export default App;
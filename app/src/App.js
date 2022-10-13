// Imports go Here
import React, { useState, useEffect } from "react";
import axios from "axios";
//import GetMenuData from "./APICaller";
import Splash from "./Splash";
import MenuCard from "./MenuCard";
//import SortDishesIntoCategories from "./ParseAPIResults";
//import { useState } from "react";

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

    return (
      <>
        <Splash />

        <MenuCard menu={menuData} />
      </>
    );
  }
  
  export default App;
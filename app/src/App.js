// Imports go Here
import React from "react";
import axios from "axios";
//import GetMenuData from "./APICaller";
import Splash from "./Splash";
import MenuCard from "./MenuCard";
//import SortDishesIntoCategories from "./ParseAPIResults";
//import { useState } from "react";

function App() {

  async function getData() {
    console.log("Inside getData().");
    let endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/"
    let response = await axios.get(endpoint);
    console.log(response.data);
    return response.data;
  };

  

    let MenuData = getData();
    //SortDishesIntoCategories(MenuData);
  
    //let state = 1;
    console.log("Inside App function.");
    //const [post] = React.useState(null);

    return (
      <>
        <Splash />

        <MenuCard p={MenuData} />
      </>
    );
  }
  
  export default App;
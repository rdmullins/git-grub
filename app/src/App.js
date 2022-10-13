// Imports go Here
import React from "react";
import GetMenuData from "./APICaller";
import Splash from "./Splash";
import { useState } from "react";

function App() {
    //let state = 1;
    console.log("Inside App function.");
    const [post] = React.useState(null);

    return (
      <>
        <Splash />
        <GetMenuData />
        <h1>This is inside App(). I'm using API data!</h1>
        {/* <h2>Here's a sample item. {post[75].description}</h2> */}
      </>
    );
  }
  
  export default App;
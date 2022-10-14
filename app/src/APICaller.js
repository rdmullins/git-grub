import axios from "axios";
import React from "react";
import { useEffect } from "react";

async function APICaller() {
    let endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/"

    React.useEffect(() => {
        let response = axios.get(endpoint);
        console.log("New API Caller Iteration: ", response.data);
        
    }, []);
    //if (!post) return null;

};

export default APICaller;


// import React from "react";
// import axios from "axios";
// import { useState } from "react";

// const endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

// function GetMenuData() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(endpoint).then((response) => {
//       setPost(response.data);
//       //console.log("The API response is: ", post.data);
//     });
//   }, []);

//   if (!post) return null;

//   console.log("At the bottom of API Caller: ", post[5]);
// };


// export default GetMenuData;

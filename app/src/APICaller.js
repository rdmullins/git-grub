import React from "react";
import axios from "axios";
import { useState } from "react";

const endpoint = "https://astute-baton-362318.ue.r.appspot.com/api/json/";

function GetMenuData() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(endpoint).then((response) => {
      setPost(response.data);
      console.log("The API response is: ", post.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);
};


export default GetMenuData;

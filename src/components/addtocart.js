import React,{useEffect} from "react";
import { Cart } from "./cart";
import Usernavbar from "./usernavbar";
import { useHistory } from "react-router";

export const Addtocart = () => {
  const history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem("email")){
      history.push({
        pathname:"/"
      })
    }
  });
  return (
    <div>
      <Usernavbar />
      <Cart />
    </div>
  );
};

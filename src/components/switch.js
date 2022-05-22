import React from "react";
import Landing from "./landing";
import '../styles/canvas.css';
import { useEffect } from "react";
import MeSlider from "./aboutme";




  export default function Info(prop) {
  
    const index = prop.index

  return (
      <>
        {index == "1" &&  <Landing />}
        {index == "2" &&  <MeSlider />}
      </>
    

  );
}
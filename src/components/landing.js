import React from "react";
import { useEffect } from "react";

function Landing(){

    useEffect(() => {
        document.getElementsByClassName("main-title")[0].style.fontSize = "3em";
    },[])
    
    return (
        <div className="header">
            <h1 class="main-title">Sijinsha <span class="thin">Here!</span></h1>
        </div>
    );
}

export default Landing
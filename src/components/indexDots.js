import React from "react";
import '../styles/indexDots.css';

function Indexdots(props){
    var indexes = [1,2,3,]

    const changeIndex = (elem)=>{
        props.func(elem.target.getAttribute("pageno"));
    }
    
    return (
        <div className="index-cont">
            {
            indexes.map(index => (
                <div id="index-parent">
                    <div className="dot"></div>
                    <div className="pulse" pageno= {index} onClick={changeIndex}></div>
                </div>
            ))}

        </div>
        
    )
}

export default Indexdots
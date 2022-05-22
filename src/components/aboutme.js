import React from "react";
import { useEffect } from "react";
import '../styles/sliderhead.css';

function MeSlider(){

    useEffect(() => {

        // let height = window.innerHeight

        // document.getElementsByClassName("sliderHead")[0].style.top = `${height + (height * 0.5)} px`

        const intervalId = setInterval(() => {
            const show = document.querySelector('.sliderMask span[data-show]')
            const next = show.nextElementSibling ||document.querySelector('.sliderMask span:first-child');
            const up = document.querySelector('.sliderMask span[data-up]')

            if(up){
                up.removeAttribute('data-up')
            }

            show.removeAttribute('data-show')
            show.setAttribute('data-up','')

            next.setAttribute('data-show','')
          }, 2000);
        
          return () => clearInterval(intervalId);
    }, []);

    return(
        <h2 className="sliderHead">I am 
            <div className="sliderMask">
                <span data-show>a Web Developer</span>
                <span>in love with JS</span>
                <span>familiar in SQL</span>
                <span>familiar in .Net</span> 
            </div>
        </h2>

    )
    
}

export default MeSlider
import React from "react";
import './styles/canvas.css';
import { useEffect, useState } from "react";
import Info from "./components/switch";
import Indexdots from "./components/indexDots";
//import './script/stars.js';



export default function App() {
    const [pageIndex, setPageIndex] = useState(1);

    const pull_data = (data) => {
        setPageIndex(data) // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      }
    
    useEffect(() => {
        // DOM selectors

        const stars = document.getElementsByClassName('Stars')[0];
        const starsCtx = stars.getContext('2d');

        let speed = parseInt(pageIndex) *3

        // global variables
        let screen, starsElements, starsParams = { speed:speed , number: 300, extinction: 4 };

        // run stars
        setupStars();
        updateStars();

        if(pageIndex == 1) document.getElementsByClassName("main-title")[0].style.fontSize = "3em";


        // update stars on resize to keep them centered
        window.onresize = function() {
            setupStars();
        };

        // star constructor
        function star() {
            this.x = Math.random() * stars.width;
            this.y = Math.random() * stars.height;
            this.z = Math.random() * stars.width;

            this.move = function() {
                this.z -= starsParams.speed;
                if (this.z <= 0) {
                    this.z = stars.width;
                }
            };

            this.show = function() {
                let x, y, rad, opacity;
                x = (this.x - screen.c[0]) * (stars.width / this.z);
                x = x + screen.c[0];
                y = (this.y - screen.c[1]) * (stars.width / this.z);
                y = y + screen.c[1];
                rad = stars.width / this.z;
                opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

                starsCtx.beginPath();
                starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                starsCtx.arc(x, y, rad, 0, Math.PI * 2);
                starsCtx.fill();
            }
        }

        // setup <canvas>, create all the starts
        function setupStars() {
            screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
            };
            window.cancelAnimationFrame(updateStars);
            stars.width = screen.w;
            stars.height = screen.h;
            starsElements = [];
            for (let i = 0; i < starsParams.number; i++) {
                starsElements[i] = new star();
            }
        }

        // redraw the frame
        function updateStars() {
            starsCtx.fillStyle = "black";
            starsCtx.fillRect(0, 0, stars.width, stars.height);
            starsElements.forEach(function (s) {
                s.show();
                s.move();
            });
            window.requestAnimationFrame(updateStars);
        }

       
            
    }, [pageIndex]);
  return (
    <div className="Mainview">
      <canvas className="Stars"></canvas>
      <Indexdots func= {pull_data} />
      <Info index= {pageIndex}/>
    </div>
  );
}

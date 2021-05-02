import React, {useState, useEffect} from "react";
export default function Star(props){
    let starS = "star star-small";
    let starM = "star star-medium";
    let starL = "star star-large";
    let [stars, setStars] = useState(null);
    let [ready, setReady] = useState(false);
    
    function setupStarsArray(){
        let starsArray = [];
        let numberS = props.small;
        let numberM = props.medium;
        let numberL = props.large;
        for (let i = 0; i < numberS; i++){
            starsArray.push(starS);
        }
        for (let i = 0; i < numberM; i++){
            starsArray.push(starM);
        }
        for (let i = 0; i < numberL; i++){
            starsArray.push(starL);
        }
        getReady(starsArray);
    }
    function getReady(stars){
        setStars(stars);
        setReady(true);
    }
    useEffect(()=>{
        setupStarsArray();
    }, [])
    if (ready){
        return ( 
            <div className="Stars">
                {stars.map(function(star, index){
                    let random1 = Math.random()*100+"%";
                    let random2 = Math.random()*100+"%";
                    function getRandomNumb(min, max) {
                        return Math.random() * (max - min + 1) + min;
                    }
                    let random3 = getRandomNumb(1, 5);
                    let random4 = getRandomNumb(4, 6);
                    let style = {
                        top:random1,
                        left:random2,
                        "animationDelay":random3,
                        "animationDuration":random4
                    }
                    return (
                        <div key={index} className={star} style={style}></div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}
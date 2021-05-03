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
    // eslint-disable-next-line
    }, [])
    if (ready){
        return ( 
            <div className="Stars">
                {stars.map(function(star, index){
                    let random1 = Math.random()*100+"%";
                    let random2 = Math.random()*100+"%";
                    let style = {
                        top:random1,
                        left:random2
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
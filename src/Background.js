import React from "react";
import Star from "./Star";
import "./Background.css";

export default function Background(){
    return (
        <div className="Background">
            <Star small="150" medium="60" large="30"/>
        </div>
    );
}
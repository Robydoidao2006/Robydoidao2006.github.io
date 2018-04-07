import React from "react";
import "./Title.css";

const Title = props => (
    <div className="holdTitle">
        <h1 className="title">Click on a chacarter to start the game</h1>
        <h1 className="title">Do not click on the same character twice</h1>
        <h3 className="alertBox">{props.alert}</h3>
    </div>
);


export default Title;




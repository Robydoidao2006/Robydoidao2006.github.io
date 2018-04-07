import React from "react";
import "./Navbar.css";

const Navbar = props => 

<nav>
    <ul>
        <a href=".">Click here to Reset</a>
        <li className="score">Score: {props.score}</li>
        <li className="topScore">Top Score: {props.topScore}</li>
    </ul>
</nav>


export default Navbar;



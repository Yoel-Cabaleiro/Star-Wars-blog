import React from "react";
import "../../styles/home.css";
import Planet from "../../img/planet1.png"
import Ship from "../../img/ship.png"
import Logo from "../../img/logostarwars.png"

export const Home = () => {
	return(
		<div className="home-container">
			<div className="planet">
				<img className="planet-img" src={Planet}></img>
			</div>
			<div className="ship">
				<img className="ship-img" src={Ship}></img>
			</div>
			<div className="title">
				<img src={Logo}></img>
				<h1>The Archives</h1>
			</div>
		</div>	
	)
	};

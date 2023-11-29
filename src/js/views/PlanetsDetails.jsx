import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/details.css"

export const PlanetDetails = () => {

    const {store, actions} = useContext(Context)

    const params = useParams();

    const handleError = (e) => {
        const targetElement = e.target.parentNode
        targetElement.classList.remove("img-container")
        targetElement.classList.add("img-container-error")
        e.target.src = ""
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="pad col-10 col-md-12">
                    <div className="row justify-content-center">
                        <div className="img-container col-10 col-md-5 m-5">
                            <img onError={handleError} src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}></img>
                        </div>
                        <div className="content-container col-10 col-md-5">
                            <h1>{store.current.name}</h1>
                            <ul className="detail-list">
                                <li><b><u>Population:</u></b> {store.current.population}</li>
                                <li><b><u>Climate:</u></b> {store.current.climate}</li>
                                <li><b><u>Orbital period:</u></b> {store.current.orbital_period}</li>
                                <li><b><u>Rotation period:</u></b> {store.current.rotation_period}</li>
                                <li><b><u>Diameter:</u></b> {store.current.diameter}</li>
                                <li><b><u>Gravity:</u></b> {store.current.gravity}</li>
                            </ul>
                        </div>
                        
                            
                        
                    </div>
                </div>
            </div>
        </div>    
    )
}
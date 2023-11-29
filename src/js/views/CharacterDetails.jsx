import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/details.css"

export const CharacterDetails = () => {

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
                <div className="pad col-10 col-md-12 m-2">
                    <div className="row justify-content-center">
                        <div className="img-container col-10 col-md-5 m-5">
                            <img onError={handleError} src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}></img>
                        </div>
                        <div className="content-container col-10 col-md-5">
                            <h1>{store.current.name}</h1>
                            <ul className="detail-list">
                                <li><b><u>Birth:</u></b> {store.current.birth_year}</li>
                                <li><b><u>Gender:</u></b> {store.current.gender}</li>
                                <li><b><u>Hair color:</u></b> {store.current.hair_color}</li>
                                <li><b><u>Eyes color:</u></b> {store.current.eye_color}</li>
                                <li><b><u>Mass:</u></b> {store.current.mass}</li>
                                <li><b><u>Height:</u></b> {store.current.height}</li>
                            </ul>
                        </div>
                        
                            
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}
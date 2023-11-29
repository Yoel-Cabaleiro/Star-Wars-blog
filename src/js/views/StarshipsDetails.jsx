import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/details.css"

export const StarshipsDetails = () => {

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
                            <img onError={handleError} src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}></img>
                        </div>
                        <div className="content-container col-10 col-md-5 my-3">
                            <h1>{store.current.name}</h1>
                            <ul className="detail-list">
                                <li><b><u>Class:</u></b> {store.current.starship_class}</li>
                                <li><b><u>Crew:</u></b> {store.current.crew}</li>
                                <li><b><u>Passengers:</u></b> {store.current.passengers}</li>
                                <li><b><u>Length:</u></b> {store.current.length}</li>
                                <li><b><u>Hyperdrive:</u> </b>{store.current.hyperdrive_rating}</li>
                                <li><b><u>Manufacturer:</u></b> {store.current.manufacturer}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}
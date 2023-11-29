import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import "../../styles/cards.css"

export const Planets = () =>{
    const {store, actions} = useContext(Context)

    const handleError = (e) => {
        const targetElement = e.target.parentNode
        targetElement.classList.remove("screen-image")
        targetElement.classList.add("screen-image-error")
        e.target.src = ""
    }
    const handleFavourite = (item) => {
        const isAlreadyFavourite = store.favourites.some((favorite) => favorite.name === item.name);
        if(isAlreadyFavourite){
            actions.deleteFavourite(item)
        }
        else{
            actions.updateFavourites(item)
        }
    }

    const handleFavouriteClass = (item) => {
        const isAlreadyFavourite = store.favourites.some((favorite) => {
            return (favorite.name === item.name)
         });
        if(isAlreadyFavourite){
            return ("favourites-true")
        }
        else {
            return ("favourites")
        }
    }

    const navigate = useNavigate()

    return(
        <div className="container">
            <h1>Planets</h1>
            <div className="row justify-content-center">
                {store.planets.map((item, index) =>{
                    return(
                        <div key={item.name} className="screen col-xl-2 col-lg-3 col-md-4 col-10 m-3" >
                            <div className="screen-image">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} onError={handleError}></img>
                            </div>
                            <div className="screen-overlay"></div>
                            <div className="screen-content">
                            <div className="options">
                                <div onClick={() => navigate(`/planets/${item.uid}`)}><i className="details"><FontAwesomeIcon icon={faPlus} /></i></div>
                                <div onClick={() => handleFavourite(item)}><i className={handleFavouriteClass(item)}><FontAwesomeIcon icon={faStar} className="full" /></i></div>
                                </div>
                                <div className="name">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
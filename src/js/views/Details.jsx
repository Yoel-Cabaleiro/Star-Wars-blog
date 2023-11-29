import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { CharacterDetails } from "./CharacterDetails.jsx";
import { PlanetDetails } from "./PlanetsDetails.jsx";
import { StarshipsDetails } from "./StarshipsDetails.jsx";


export const Details = () =>{

    const navigate = useNavigate()
   
    const params = useParams()

    const {store, actions} = useContext(Context)
    const type = params.type 
    const id = params.id 
    

    useEffect(()=>{
        async function fetchData() {
            const response = await actions.getCurrent(type, id);
            if(response === "Error"){
                navigate("*")
            }
          }
          fetchData();
    }, [type, id])

    


    return(
        <div>
            {type === "people" && type ? 
                <CharacterDetails/> : type === "planets" && type ? 
                    <PlanetDetails/> : type ==="starships" ? 
                        <StarshipsDetails/> : navigate("*")  }
        </div>
    )    
}
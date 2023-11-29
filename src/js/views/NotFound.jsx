import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../../styles/details.css"


export const NotFound = () => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="pad col-10 col-md-12 m-2">
                    <div className="row justify-content-center">
                        <div className="not-found">
                            <p>404</p>
                            <p>Data Not Found</p>

                        </div>
                        
                            
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

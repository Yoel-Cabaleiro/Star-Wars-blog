import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { element } from "prop-types";

export const Navbar = () => {
  const {store, actions} = useContext(Context)

  const getPath = (item) => {
    if (item.url.includes("people")) {
      return `/people/${item.uid}`;
    } else if (item.url.includes("planets")) {
      return `/planets/${item.uid}`;
    } else {
      return `/starships/${item.uid}`;
    }
  };

  const handleActive = () => {
    if(store.favourites.length > 0){
      return "vital-icon-active"
    }
    else{
      return "vital-icon"
    }
  }

  const handleDisplay = () => {
    if(store.favourites.length > 0){
      return "number"
    }
    else{
      return "number-inactive"
    }
  }

	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">The Archives</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <Link className="nav-link" aria-current="page" to="/characters">Characters</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/planets">Planets</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/starships" className="nav-link">Starships</Link>
          </li>
          <li className="nav-item dropdown ms-2">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faStar} className={handleActive()}/>Vital Data<div className={handleDisplay()}>{store.favourites.length}</div></a>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              {store.favourites.map((item, index) => {
                return (<li key={index}><Link className="dropdown-item" to={getPath(item)}>{item.name}</Link></li>)
              })}
              
              
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
	);
};

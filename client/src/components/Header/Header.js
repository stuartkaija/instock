import instockImg from '/Users/brynfrayne/Desktop/instock/client/src/assets/logos/InStock-Logo_1x.png';
import React from 'react';
import "./Header.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
 
 export default function Header() {
    //  //assigning location variable
    //  const location = useLocation();

    //  //destructuring pathname from location
    //  const { pathname } = location;
 
    //  //Javascript split method to get the name of the path in array
    //  const splitLocation = pathname.split("/"); 
     
     return (
         <div className="header">
             <img src={instockImg} alt=''/>
             <div className='header__button-container'>
                 <NavLink to='/' className='header__button' >Warehouses</NavLink>
                 <NavLink to='/' className='header__button'>Inventory</NavLink>
             </div>
         </div>
     )
 }
 
//  <button className={`header__button ${splitLocation[1] === "Warehouses" ? "active-button" : ""}`}>Warehouses</button>
//                  <button className={`header__button ${splitLocation[1] === "Inventory" ? "active-button" : ""}`}>Inventory</button>
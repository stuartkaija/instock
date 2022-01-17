import instockImg from '../../assets/logos/InStock-Logo_1x.png';
import React from 'react';
import "./Header.scss";
import { NavLink } from 'react-router-dom';
 
 export default function Header() {
     
     return (
         <div className="header">
             <NavLink to="/"><img src={instockImg} alt='Instock logo'/></NavLink>
             <div className='header__button-container'>
                 <NavLink to='/warehouses' activeClassName='header__button--active' className='header__button' >Warehouses</NavLink>
                 <NavLink to='/inventory' activeClassName='header__button--active' className='header__button'>Inventory</NavLink>
             </div>
         </div>
     )
 }
 
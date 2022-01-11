import instockImg from '/Users/brynfrayne/Desktop/instock/client/src/assets/logos/InStock-Logo_1x.png';
import React from 'react';
import "./Header.scss";
 
 export default function Header() {
     return (
         <div className="header">
             <img src={instockImg} alt=''/>
             <div className='header__button-container'>
                 <button className="header__button">Warehouses</button>
                 <button className="header__button">Inventory</button>
             </div>
         </div>
     )
 }
 
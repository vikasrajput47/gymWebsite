import React from 'react'
import img from './img/icon.png'
import { useState } from 'react';
function Navbar() {
    const [expand,setExpand]=useState(false);


   const items=['Home','About','Charges','Contact']
  return (

    <div>
        <div className="navigationBar topAnimation">
        <div className="icon">
         <img src={img} alt="" />
        <div className='name'>Btech Gym Wala</div>
        </div>


        <div  className="mobile" >
          <button  onClick={()=>{setExpand(!(expand))}}>{expand ? 'x' :'▾'}</button>
          <ul   className="mobileNav">
            { expand ?items.map((items,i)=>(
                <div><li className="mItems"key={i}><a href={`/${items.toLowerCase()}`}>{items}</a></li></div>
            )) :null}
          </ul>
        </div>
   
        <div className="desktop">
          <ul className="desktopItems">
         
            { items.map((items,i)=>(
                <li className="dItems"key={i}><a href={`/${items.toLowerCase()}`}>{items}</a></li>
            )) }
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
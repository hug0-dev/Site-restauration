import React from 'react';
import "./index.css"

export const  Cards = ({logo,logoChange}) => {

return(
    <div ClassName ="containers"> 


   {logoChange === 'display'} <img className="resto"  src={logo} alt="logo1"/>
   {logoChange === 'transition'} <img className="resto"  src={logo} alt="logo2"/>  
    

    

    </div>
)
}
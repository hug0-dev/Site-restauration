
import React from 'react'
import { Display1 } from "./Display1"
import { Display2 } from "./Display2"

const Logo = ({children}) => {

    return(
        <div>{children}</div>
    )
}
Logo.Display1 = Display1;
Logo.Display2 = Display2;

export default Logo;
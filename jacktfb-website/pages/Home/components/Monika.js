/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

function Monika() {
    const [isHovered, setIsHovered] = useState(false);


    return(
        <img
            src={isHovered ? "gifs/monikahappy.gif" : "gifs/monika.gif"}
            alt='Monika'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-72 w-max m-auto"
        />
        
    )
}

export default Monika
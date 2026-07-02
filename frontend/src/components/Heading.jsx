import React from 'react';

function Heading({heading}) {
    return ( 
        <>
        <h1 className="text-2xl lg:text-5xl mb-1 font-bold tracking-wide " >{heading}</h1>
        </>
     );
}

export default Heading;
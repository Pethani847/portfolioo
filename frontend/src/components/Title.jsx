import React from 'react';

function Title({num, title}) {
    return ( 
        <>
        <p className="text-base lg:text-xl font-medium" >{num} | {title}</p>
        <div className="w-full lg:flex-1 h-[1px] bg-fg"></div>
        </>
     );
}

export default Title;
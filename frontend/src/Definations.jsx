import React from 'react';

import definations from './data/defination';

function Definations() {
    return ( 
        <>
        {definations.map((def) => (
                <div
                  key={def.name}
                  className="flex flex-col items-center gap-3"
                >
                  <i className={`${def.icon} text-sm lg:text-base`}></i>
                  <span className="text-sm lg:text-base">{def.name}</span>
                </div>
              ))}
        </>
     );
}

export default Definations;
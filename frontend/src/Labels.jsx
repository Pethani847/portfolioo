import React from 'react';

import labels from './data/labels';

function Labels() {
    return ( 
        <>
        {labels.map((label) => (
                <div
                  key={label}
                  className="bg-bg2 hover:text-pyellow transition-all duration-150 hover:-translate-1 border-1 rounded-xl text-sm lg:text-xl px-2 py-1 lg:px-4 lg:py-2 "
                >
                  {label}
                </div>
              ))}
        </>
     );
}

export default Labels;
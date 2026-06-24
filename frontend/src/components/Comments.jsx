import React from 'react';

function Comments({comment}) {
    return ( 
        <>
        <p className="text-sm lg:text-xl italic font-light ">// {comment} </p>
        </>
     );
}

export default Comments;
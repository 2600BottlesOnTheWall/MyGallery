import React from 'react';

export default function Pane({children}){
    return(
        <div className="tab-pane fade show active" role="tabpanel" >{children}</div>
    )
}
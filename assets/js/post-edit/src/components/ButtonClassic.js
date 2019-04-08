import React from 'react';

function ButtonClassic(props) {
    return ( <div 
                onClick={props.onClick}
                className = "button" >
                <span clasName = "wp-media-buttons-icon" > </span> 
                Add MyGallery
        </div >
    )
}

export default ButtonClassic;
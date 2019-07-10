import React from 'react';
import Pane from '../elements/Pane';
import Button from '../elements/Button';

export default function SelectImagePane (){
    return (
        <Pane>
           
                <h5>Select or download image</h5>
                <p>You can choose or download images using wordpress media frame.</p>
            
                <Button className="btn btn-primary">Select image</Button>
            
        </Pane>
    )

    
}
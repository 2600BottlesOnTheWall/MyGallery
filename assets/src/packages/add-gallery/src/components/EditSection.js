import React from 'react';
import Button from './elements/Button';
export class EditSection extends React.Component{
    render(){
        return(
            <div className="tab-content col-12">
                <h5>Create a new or edit existing gallery.</h5>
                <p>You can choose or download images using wordpress media frame.</p>
            
                <Button className="btn btn-primary">Select image</Button>
            </div>
        )
    
    }
}
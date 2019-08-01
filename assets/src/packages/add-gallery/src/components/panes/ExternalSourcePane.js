import React from 'react';
import Pane from '../elements/Pane';

export default function ExternalSourcePane({}){
    return (
        <Pane>
            <h5>Create dynamic galleries.</h5>
            <p>We are plaining to create dynamic instagram galleries in the next version of myGallery.
                Follow us on twitter to do not miss this important update.</p>
            <div className="d-flex">
                <span className='fo fo-facebook'><a herf="#"></a></span>
                <span className='fo fo-twitter ml-3 mr-3'><a herf="#"></a></span>
                <span className='fo fo-github'><a herf="#"></a></span>
            </div>
        </Pane>
    )
} 
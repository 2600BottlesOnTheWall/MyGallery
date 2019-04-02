import React from 'react';
import ReactDOM from 'react-dom';
import MenuItemWrapper from './components/MenuItem';

function myGallery(){
    const liElement=document.createElement('li'),
          MenuItem=MenuItemWrapper();
    liElement.className='editor-block-types-list__list-item';
    ReactDOM.render(<MenuItem />, liElement);
        const menuButton=document.querySelector(".editor-inserter");
        !menuButton&&console.error('Element \"editor-inserter\" cannot be found.');
        menuButton.addEventListener('click',()=>{
            window.setTimeout(()=>{
                const el=document.querySelector(".editor-block-types-list");
                el&&el.prepend(liElement);
            },10)
        })
}

export default  myGallery;



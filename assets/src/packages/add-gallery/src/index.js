import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './containers/Main';



window.addEventListener('load',()=>{
    ReactDOM.render(<Main />,document.getElementById('add-gallery'))
})
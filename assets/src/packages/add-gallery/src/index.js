import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/index';
import {uriToJson} from '@my-gallery/helpers'
import {setRoute} from './actions/route'

const store=createStore(appReducer,applyMiddleware(thunkMiddleware)),
    currentUri=window.location.search,
    uriParams=uriToJson(currentUri);

store.dispatch(setRoute(uriParams.post))
window.addEventListener('load',()=>{
    document.getElementsByTagName('html')[0].style.overflowY="scroll";
    ReactDOM.render(<Provider store={store}><Main /></Provider>,document.getElementById('add-gallery'))
})
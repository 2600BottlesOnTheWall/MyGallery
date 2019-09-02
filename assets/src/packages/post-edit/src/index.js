import {myGalleryGutenberg} from './App';
import {myGalleryClassic} from './App';
import {getEditorType} from '@my-gallery/helpers';
import {myGalleryPlugin} from 'globals';


if(!myGalleryPlugin){
   myGalleryPlugin=window.myGalleryPlugin={}
}
export const myGalleryGlobalConfig = myGalleryPlugin;
export {myGalleryClassic} from './App';
export {myGalleryGutenberg} from './App';


window.addEventListener('DOMContentLoaded', ()=>{
    myGalleryGlobalConfig.editor = getEditorType();
    switch (myGalleryGlobalConfig.editor) {
        case 'gutenberg':
            myGalleryGutenberg();
            break;
        case 'classic':
            myGalleryClassic();
            break;
    }
} )

import {myGalleryGutenberg} from './App';
import {myGalleryClassic} from './App';
import {getEditorType} from './helpers';
 
export const config={};
window.addEventListener('load',()=>{
   config.editor=getEditorType();
   switch(config.editor){
       case 'gutenberg':
        myGalleryGutenberg();
        break;
       case 'classic':
        myGalleryClassic();
        break;
   } 
   }) 
 

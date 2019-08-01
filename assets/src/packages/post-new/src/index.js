import {myGalleryClassic} from "@my-gallery/post-edit";
import {getEditorType} from '@my-gallery/helpers';
import {myGalleryPlugin} from 'globals';

export const myGalleryGlobalConfig = myGalleryPlugin||{};
window.addEventListener('load', ()=>{
    myGalleryGlobalConfig.editor = getEditorType();
    switch (myGalleryGlobalConfig.editor) {
        case 'classic':
            myGalleryClassic();
            break;
    }
});
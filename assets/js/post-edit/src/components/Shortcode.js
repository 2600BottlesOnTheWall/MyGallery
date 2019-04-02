import React from 'react';
import ReactDom from 'react-dom';
import ShortcodeElementWrapper from './ShortcodeElement';





function Shortcode(ids){
        const editorWindow=document.querySelector('.block-library-rich-text__tinymce'),
              text='[my-gallery ids='+ids+']',
              wrapper=document.createElement('p'),
              clientsId=editorWindow.id.replace('editor-',''),
        /*
        * Wordpress dependencies 
        * https://github.com/WordPress/gutenberg/tree/master/packages/data
        *
        */
              {dispatch,select}=window.wp.data,
              ShortcodeElement=ShortcodeElementWrapper();
        ReactDom.render(<ShortcodeElement text={text} />,wrapper);
        editorWindow.append(wrapper);
        const post=select('core/editor').getCurrentPost();
        dispatch('core/editor').updateBlockAttributes(clientsId,{content:post.content+'<br> '+text});
    }


export default Shortcode;
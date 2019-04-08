
import {config} from '../index';

function shortcodeGutenberg(text){
      const editorWindow=document.querySelector('.block-library-rich-text__tinymce'),
            clientsId=editorWindow.id.replace('editor-',''),
        /*
        * Wordpress dependencies 
        * https://github.com/WordPress/gutenberg/tree/master/packages/data
        *
        */
            {dispatch,select}=window.wp.data,
            post=select('core/editor').getCurrentPost();
      dispatch('core/editor').updateBlockAttributes(clientsId,{content:post.content+'<br> '+text});
      return editorWindow;
}
function shortcodeClassic (text){
      return document.querySelector('#content_ifr').contentDocument.querySelector('#tinymce');
}
function shortcode(ids){
      const editorWindow=config.editor=='gutenberg'?shortcodeGutenberg(text):config.editor=='classic'&&shortcodeClassic(text),
            text='[my-gallery ids='+ids+']';
      editorWindow.innerHTML+='<br> '+text;
}
export default shortcode;
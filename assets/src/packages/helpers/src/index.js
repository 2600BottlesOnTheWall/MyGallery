
import {config} from '@my-gallery/post-edit';

function shortcodeGutenberg(text) {
    const editorWindow = document.querySelector('.block-library-rich-text__tinymce'),
        clientsId = editorWindow
            .id
            .replace('editor-', ''),
        /*
        * Gutenberg Editor dependencies
        * https://github.com/WordPress/gutenberg/tree/master/packages/data
        * activate save post button
        */
        {dispatch, select} = window.wp.data,
        post = select('core/editor').getCurrentPost();
    dispatch('core/editor').updateBlockAttributes(clientsId, {
        content: post.content + '<br> ' + text
    });
    return editorWindow;
}
function shortcodeClassic(text) {
    return document
        .querySelector('#content_ifr')
        .contentDocument
        .querySelector('#tinymce');
}
export function shortcode(ids) {
    const editorWindow = config.editor == 'gutenberg'
            ? shortcodeGutenberg(text)
            : config.editor == 'classic' && shortcodeClassic(text),
        text = '[my-gallery ids=' + ids + ']';
    editorWindow.innerHTML += '<br> ' + text;
}

/**
 *  Identifies type of using WP editor.
 *
 * @return string
 */

export function getEditorType() {
    const toolsContainerClassic = document.querySelector('#wp-content-editor-tools'),
        toolsContainerGutenberg = document.querySelector('.editor-inserter');
    if (toolsContainerClassic) {
        return 'classic';
    } else if (toolsContainerGutenberg) {
        return 'gutenberg';
    }

}
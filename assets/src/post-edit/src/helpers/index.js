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
import React from 'react';
import Shortcode from './Shortcode';
import {defaults} from 'lodash';
import {wp} from 'globals';


const getGalleryDetailsMediaFrame = () => {

    /**
	 * Custom gallery details frame.
	 *
	 * @link https://github.com/xwp/wp-core-media-widgets/blob/905edbccfc2a623b73a93dac803c5335519d7837/wp-admin/js/widgets/media-gallery-widget.js
	 * @class GalleryDetailsMediaFrame
	 * @constructor
	 */
    return wp
        .media
        .view
        .MediaFrame
        .Post
        .extend({

        /**
		 * Create the default states.
		 *
		 * @return {void}
		 */
            createStates: function createStates() {
                this
                    .states
                    .add([
                        new wp
                            .media
                            .controller
                            .Library({
                                id: 'gallery',
                                title: wp.media.view.l10n.createGalleryTitle,
                                priority: 40,
                                toolbar: 'main-gallery',
                                filterable: 'uploaded',
                                multiple: 'add',
                                editable: false,

                                library: wp
                                    .media
                                    .query(defaults({
                                        type: 'image'
                                    }, this.options.library))
                            }),

                        new wp
                            .media
                            .controller
                            .GalleryEdit({library: this.options.selection, editing: this.options.editing, menu: 'gallery', displaySettings: false, multiple: true}),

                        new wp
                            .media
                            .controller
                            .GalleryAdd()
                    ]);
            }
        });
};
function MenuItemWrapper(){
    
    return (
        class MenuItem extends React.Component {
            constructor(props) {
                super(props);

                this.frame = new(getGalleryDetailsMediaFrame())({editing: false, mimeType: ["image"], multiple: true, selection: {}, state: "gallery"})
                this.onClick = this
                    .onClick
                    .bind(this);
                this.onUpdate = this
                    .onUpdate
                    .bind(this);
                this
                    .frame
                    .on("update", this.onUpdate);
            }
            onUpdate(selection) {
                const attachment = this.getIds(selection.models);
                this.addShortcode(attachment);
            }
            addShortcode(inputValue) {
                Shortcode(inputValue);
            }
            getIds(models) {
                return models
                    .map(model => {
                    return model.id;
                })
                    .join(',');
            }
            onClick() {
                this
                    .frame
                    .open();
            }

            render() {
                return (
                    <button
                        className="editor-block-types-list__item editor-block-list-item-gallery"
                        aria-label="Gallery"
                        onClick={this.onClick}>
                        <span className="editor-block-types-list__item-icon">
                            <span className="editor-block-icon has-colors">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-hidden="true"
                                    focusable="false">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <g>
                                        <path d="M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z"></path>
                                        <path d="M12 12l1 2 3-3 3 4H9z"></path>
                                        <path d="M2 6v14l2 2h14v-2H4V6H2z"></path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                        <span className="editor-block-types-list__item-title">MyGallery</span>
                    </button>
                )

            }
        })
    }

export default MenuItemWrapper;
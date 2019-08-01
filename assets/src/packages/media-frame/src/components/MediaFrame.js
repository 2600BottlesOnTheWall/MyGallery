import React from 'react';
import {shortcode} from '@my-gallery/helpers';
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
    return wp.media.view.MediaFrame.Post.extend({

            /**
             * Create the default states.
             *
             * @return {void}
             */
            createStates: function createStates() {
                this.states.add([
                        new wp.media.controller.Library({
                                id: 'gallery',
                                title: wp.media.view.l10n.createGalleryTitle,
                                priority: 40,
                                toolbar: 'main-gallery',
                                filterable: 'uploaded',
                                multiple: 'add',
                                editable: false,
                                library: wp.media.query(defaults({
                                        type: 'image'
                                    }, this.options.library))
                            }),

                        new wp.media.controller.GalleryEdit({library: this.options.selection, editing: this.options.editing, menu: 'gallery', displaySettings: false, multiple: true}),

                        new wp.media.controller.GalleryAdd()
                    ]);
            }
        });
};

class MediaFrame extends React.Component {
    constructor(props) {
        super(props);

        this.frame = new(getGalleryDetailsMediaFrame())({editing: false, mimeType: ["image"], multiple: true, selection: {}, state: "gallery"})
        this.onClick = this.onClick.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
     
        this.frame.on("update", this.onUpdate);
        this.frame.on("open",this.markSelected)
    }
    onUpdate(selection) {
        const attachment = this.getIds(selection.models);
        this.addShortcode(attachment);

    }
    addShortcode(inputValue) {
        shortcode(inputValue);
    }
    getIds(models) {
        return models.map(model => {
            return model.id;
        }).join(',');
    }

    onClick() {
        this.frame.open();
       
    }

    render() {
        const Button = this.props.button;
        return (< Button onClick = {
            this.onClick
        } />)

    }
}

export default MediaFrame;
import jQuery from 'jquery';
import baguetteBox from 'baguettebox.js';
import lightSlider from 'lightslider';
import 'baguettebox.js/dist/baguetteBox.css';
import 'lightslider/dist/css/lightslider.css';

window.addEventListener('load', () => {

    baguetteBox.run('.autoblog-gallery');
    $("#imageGallery").length && $("#imageGallery").lightSlider({
        gallery: true,
        item: 1,
        loop: false,
        thumbItem: 6,
        enableDrag: false,
        adaptiveHeight: false,
        galleryMargin: 5,
        thumbMargin: 5,
        onBeforeStart: function (el) {
            el.children('li').each(function (i, item) {
                var el = $(item);
                el.find('img').attr('src', el.data('src'));
            })
        }
    })
})
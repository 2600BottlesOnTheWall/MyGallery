import jQuery from 'jquery';
import baguetteBox from 'baguettebox.js';
import lightSlider from 'lightslider';
import 'baguettebox.js/dist/baguetteBox.css';
import 'lightslider/dist/css/lightslider.css';
import 'lightslider/dist/img/controls.png'

window.addEventListener('load', () => {
    const defaultSettings={
        gallery: true,
        item: 1,
        loop: false,
        thumbItem: 6,
        enableDrag: true,
        enableTouch:true,
        adaptiveHeight: false,
        galleryMargin: 5,
        thumbMargin: 5,
       
    }
    const gallerySettings=window.myGalleryPluginSettings;
    const onBeforeStart=function (el) {
        el.children('li').each(function (i, item) {
            var el = $(item);
            el.find('img').attr('src', el.data('src'));
        });
    }
    $(".my-gallery-list").each(function(key,value){
       var settings=gallerySettings[key]?gallerySettings[key]:defaultSettings;
        settings.onBeforeStart=onBeforeStart;
        $(value).lightSlider(settings)
    })
    
    baguetteBox.run('.my-gallery-list');
   
})
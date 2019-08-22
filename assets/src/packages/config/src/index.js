const config={
    defaultImage:'../../../../../public/images/Grey-Gradient.png',
    galleryName:'my-gallery',
    nonce:{
        addGallery:{
            data:'nonce',
            id:'add-gallery'
        },
        updatePost:{
            data:'nonce',
            id:'add-gallery'
        }
    },
    emulateJSON:true,
    api:{
        getPostsList:"/wpblog1/index.php/wp-json/my-gallery/v1/posts-list/date/desc/",
        getPostData:"/wpblog1/index.php/wp-json/my-gallery/v1/post/",
        updatePostDataApi:"/wpblog1/index.php/wp-json/my-gallery/v1/post/",
        deleteShortcodeApi:"admin-ajax.php?action=my_gallery_shortcode_api&status=delete"
    },
    errorReport:{
        url:'https://github.com/zalevsk1y/my-slider-gallery/issues/new'
    }
} 

export default config;
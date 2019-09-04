const config={
    defaultImage:'../public/images/Grey-Gradient.png',
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
        getPostsList:"../index.php/wp-json/my-gallery/v1/posts-list/date/desc/",
        getPostData:"../index.php/wp-json/my-gallery/v1/post/",
        updatePostDataApi:"../index.php/wp-json/my-gallery/v1/post/"
    },
    errorReport:{
        url:'https://github.com/zalevsk1y/my-slider-gallery/issues/new'
    }
} 

export default config;
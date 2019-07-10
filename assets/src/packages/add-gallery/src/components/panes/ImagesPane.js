import React from 'react';
import ImageItem from '../elements/ImageIten'
import GallerySortable from '../GallerySortable';
export default class ImagesPane extends React.Component{
    renderImages(){
       const imgArr=[];
        for(var i=0;i<9;i++){
            imgArr.push(
                <ImageItem title={i} src='http://192.168.137.148/wpblog1/wp-content/plugins/my-gallery/public/images/banner_header_small2.png'/>
            )
        }
        return imgArr;
    }
    render(){
        const items=this.renderImages()
        return (
            <div class="images-pane">
                <h6 class="text-nowrap d-flex h-25 ml-2 ">Gallery images</h6>
                <p class="d-flex h-25 w-auto  ml-2 mr-2 border-bottom pb-3 ">Drag to change the order.<br></br>Need some help? Read the Documentation or Watch a Video</p>
                <GallerySortable  items={items}/>
            </div>
        )
    }
}
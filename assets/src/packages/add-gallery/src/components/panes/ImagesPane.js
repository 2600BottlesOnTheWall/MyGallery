import React from 'react';
import ImageItem from '../elements/ImageIten'
import GallerySortable from '../GallerySortable';
import {connect} from 'react-redux';
import arrayMove from 'array-move';
import {setNewImagesOrder} from '../../actions/post-data'

export  class ImagesPane extends React.Component{
    constructor(props){
        super(props);        
        this.changeHandler=this.changeHandler.bind(this);   
    }
    changeHandler({oldIndex,newIndex}){
        const newOrder=arrayMove(this.props.images,oldIndex, newIndex)
        this.props.reorderImages(newOrder,this.props.selectedShortcode);
    }
    renderImages(){
        const images=this.props.images;
        if (!images&&!(images.length>0)) return [];
       const imgArr=images.map((item,key)=>{
           return <ImageItem title={(item.title?itemTitle:key)} key={key.toString()} data-id={item.id} src={item.url}/>

       })            
        return imgArr;
    }
    render(){
        const items=this.renderImages()
        return (
            <div className="images-pane">
                <h6 className="text-nowrap d-flex  ml-2 ">Gallery images</h6>
                <p className="d-flex w-auto  ml-2 mr-2 border-bottom pb-3 ">Drag to change the order.<br></br>Need some help? Read the Documentation or Watch a Video</p>
                <GallerySortable  items={items} onChange={this.changeHandler}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    const selectedShortcode=(state.postData&&state.postData.selectedShortcode)!=undefined?state.postData.selectedShortcode:false;
    const images=selectedShortcode!==false?state.postData.shortcodes[selectedShortcode].images:false;
    return {
        selectedShortcode,
        images
    }
}
function mapDispatchToProps(dispatch){
    return {
        reorderImages:(newOrder,shortcodeId)=>{
            dispatch(setNewImagesOrder(newOrder,shortcodeId));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImagesPane)
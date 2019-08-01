import React from 'react';
import RateCard from '../components/RateCard'
import {SavePostCard} from '../components/SavePostCard';
import ShortCodeCard from '../components/ShortCodeCard';
import {showMessage} from '../actions/main';
import {createNewShortcode,updatePostData} from '../actions/post-data';
import { connect } from 'react-redux';
import {getNonce} from '@my-gallery/helpers';
import config from '@my-gallery/config';
import {Animate} from '../components/Animate'

export class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.renderCards=this.renderCards.bind(this);
        this.createNewGallery=this.createNewGallery.bind(this);
        this.updatePostData=this.updatePostData.bind(this);
    }
    renderCards(){
        switch(!(!this.props.selectedPost)){
            case true:
                if(this.props.shortcodes.length>0){
                    var key=99999;
                    const selectedShortcode=this.props.selectedShortcode,
                          cardBlock=[<SavePostCard key={key.toString()} createNewGallery={this.createNewGallery} updatePostData={this.updatePostData} />];
                    cardBlock.push(this.props.shortcodes.map((item,key)=>{
                        var hide=selectedShortcode===false?item.status=='deleted'?true:false:selectedShortcode==key?false:true;
                        if (hide) return <ShortCodeCard code={item.code} key={key.toString()} id={key} className="hide-card"  />
                        return  <ShortCodeCard code={item.code} key={key.toString()} id={key}  />
                    }))
                    return cardBlock;
                }
                return <SavePostCard createNewGallery={this.createNewGallery} updatePostData={this.updatePostData} />;
            case false:
                return  <RateCard />
        }
    }
    updatePostData(){
        if(!this.props.needToSave){
            this.props.showMessage({status:'warning',text:'There is nothing to save.'});
            return;
        }
        const shortcodesBrief=this.props.shortcodes.map(item=>{
           
                var code='['+config.galleryName
                code+=' '+item.code.ids;
                code+=item.code.misc?' '+item.code.misc:'';
                code+=item.code.config?' '+item.code.config:'';
                code+=']';
         
            return {
                status:item.status,
                code,
                _originalCode:item._originalCode
            }
        })
        this.props.updatePostData(this.props.selectedPost,shortcodesBrief)
    }
    createNewGallery(){
        if(this.isSelectedDraft()){
            this.showMessage({status:"warning",text:"Save or cancel unsaved gallery first."});
        }else{
            this.props.createNewGallery(this.props.selectedPost)
        }
    }
    showMessage(status,text){
        this.props.showMessage(status,text)
    }
    isSelectedDraft(){
        if(this.props.selectedShortcode&&this.props.shortcodes[this.props.selectedShortcode].status==='draft'){
            return true;
        }
        return false;
    }
    render(){

        return(
                <div className="my-gallery-content-right col-12 pl-0 pl-sm-0 pl-md-0 pl-lg-3 pl-xl-3 mb-4 mb-sm-4 mb-md-4 mb-lg-4 mb-xl-4  mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0 pr-0  col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <this.renderCards />
            {
                // my-gallery-content-right
            }
            </div>
            
        )
        }
}

function mapStateToProps(state){
    const shortcodes=state.postData?state.postData.shortcodes:[],
          selectedPost=state.postData?state.postData.id:false,
          selectedShortcode=state.postData?state.postData.selectedShortcode:false;
    return{
        isFetching:state.main.isFetching,
        needToSave:state.main.needToSave,
        selectedPost,
        selectedShortcode,
        shortcodes
    }
}
function mapDispatchToProps(dispatch){
    return {
        createNewGallery:(postId)=>{
            dispatch(createNewShortcode(postId));
        },
        showMessage:(status,text)=>{
            dispatch(showMessage(status,text))
        },
        updatePostData:(postId,shortcodes)=>{
            const nonce=getNonce('updatePost');
            
            dispatch(updatePostData({dispatch,nonce,postId,shortcodes}));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar)
import React from 'react';
import {Input} from '../elements/Input'
import {TextAria} from '../elements/TextAria';
import {connect} from 'react-redux';
import {updateMisc} from '../../actions/post-data'
import { shortcode } from '../../../../helpers/src';
export class MiscPane extends React.Component{
    constructor(props){
        super(props);
        this.state={...this.props.misc}
        this.changeHandler=this.changeHandler.bind(this);
    }
    changeHandler(state,propName){
        this.props.updateMisc({...this.props.misc,[propName]:state},this.props.selectedShortcode);
    }
    render(){
        const misc=this.props.misc;
        return(
            <div className="misc-pane">
                <h6 className="text-nowrap d-flex ml-2 ">Miscellaneous Settings page</h6>
                <p className="d-flex w-auto  ml-2 mr-2 border-bottom pb-3" >You may customize your gallery by using additional settings below.<br></br>Need some help? Read the Documentation or Watch a Video</p>
                <table className="config-table">
                    <tbody>
                        <tr>
                            <th>Gallery title</th>
                            <td>
                                <Input type="text" propName="title" className="form-control my-gallery-input-title" onBlur={this.changeHandler} value={misc.title}/>
                                <p className="description">Specify titles for your gallery</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Custom gallery classes</th>
                            <td>
                                <TextAria rows="5" propName="classes" className="form-control my-gallery-input-class-names"  onBlur={this.changeHandler} value={misc.classes}/>
                                <p className="description">Specify additional classes for your gallery. Separate the class names with a comma.</p>

                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        )
    }
}

function mapStateToProps(state){
    const selectedShortcode=state.postData?state.postData.selectedShortcode:false;
    const misc=state.postData&&state.postData.shortcodes[selectedShortcode]?state.postData.shortcodes[selectedShortcode].settings.misc:false;
    return {
        selectedShortcode,
        misc
    }
}
function mapDispatchToProps(dispatch){
    return {
        updateMisc:(newMisc,shortcodeId)=>{
            dispatch(updateMisc(newMisc,shortcodeId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MiscPane);
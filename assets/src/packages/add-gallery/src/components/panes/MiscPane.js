import React from 'react';
import {Input} from '../elements/Input'
import {TextAria} from '../elements/TextAria';

export class MiscPane extends React.Component{
    render(){
        return(
            <div className="misc-pane">
                <h6 class="text-nowrap d-flex h-25 ml-2 ">Miscellaneous Settings page</h6>
                <p className="d-flex h-25 w-auto  ml-2 mr-2 border-bottom pb-3" >You may customize your gallery by using additional settings below.<br></br>Need some help? Read the Documentation or Watch a Video</p>
                <table className="config-table">
                    <tbody>
                        <tr>
                            <th>Gallery title</th>
                            <td>
                                <Input type="text" className="form-control my-gallery-input-title" />
                                <p class="description">Specify titles for your gallery</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Custom gallery classes</th>
                            <td>
                                <TextAria rows="5" className="form-control my-gallery-input-class-names" />
                                <p class="description">Specify additional classes for your gallery. Separate the class names with a comma.</p>

                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        )
    }
}
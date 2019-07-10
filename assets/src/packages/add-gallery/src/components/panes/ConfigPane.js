import React from 'react';
import {Switch} from '../elements/Switch';
import {Select} from '../elements/Select';

export class ConfigPane extends React.Component{
    render(){
        return (
            <div className="config-pane">
                <h6 class="text-nowrap d-flex h-25 ml-2 ">Gallery Config page</h6>
                <p className="d-flex h-25 w-auto  ml-2 mr-2 border-bottom pb-3" >You may customize your gallery by using settings below.<br></br>Need some help? Read the Documentation or Watch a Video</p>
                <table class="config-table">
                    <tbody>
                        <tr>
                            <th>Gallery mode</th>
                            <td>
                                <Switch />
                                <p class="description">Determines the presence of preview images under the main image.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Loop</th>
                            <td>
                                <Switch />
                                <p class="description">Enables or disables loop for scrolling images.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Number of thumb items</th>
                            <td>
                                <Select className="my-gallery-narrow-select" options={[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"},{id:4,title:"4"},{id:5,title:"5"},{id:6,title:"6",selected:true},{id:7,title:"7"},{id:8,title:"8"},{id:9,title:"9"},{id:10,title:"10"}]}/>
                                <p class="description">Set number of thumbnails under the main image</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Vertical</th>
                            <td><Switch />
                            <p class="description">Determines the vertical position of thumbnails. </p>
                            </td>
                        </tr>
                        <tr>
                            <th>Items</th>
                            <td>
                            <Select className="my-gallery-narrow-select" options={[{id:1,title:"1",selected:true},{id:2,title:"2"},{id:3,title:"3"},{id:4,title:"4"},{id:5,title:"5"}]}/>
                                <p class="description">Determines the number of images in the main gallery window.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
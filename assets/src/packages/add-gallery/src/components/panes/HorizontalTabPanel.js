import React from 'react';
import TabPanel from './TabPanel'
import HorizontalTabsMenu from './HorizontalTabsMenu'
import SelectImagePane from './SelectImagePane';
import ExternalSourcePane from './panes/ExternalSourcePane';

export default class HorizontalTabPanel extends TabPanel{
    constructor(props){
        super(props)
        this.state={tabs:[
            {
                name:'Select Image',
                active:true
            },
            {
                name:'External Source',
                active:false
            }
        ]}
    }
    paneRender({paneName}){
        console.log(paneName)
        switch(paneName){
            case 'Select Image':
            return <SelectImagePane />
            case 'External Source':
            return <ExternalSourcePane />
        }
    }
 
    render(){
        return (
            <div>
                <div className="mt-2 mt-md-2">
                    <HorizontalTabsMenu className="nav nav-tabs" tabsList={this.state.tabs} ariaName="ImageSelect" onClick={this.tabClickHandler} />
                </div>
                <div className="tab-content col-12">
                    <this.paneRender paneName={this.getActiveTabName()} />
                </div>
            </div>
            
        )
    }
}
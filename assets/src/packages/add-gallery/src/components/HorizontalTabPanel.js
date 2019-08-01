import React from 'react';
import TabPanel from './elements/TabPanel'
import HorizontalTabsMenu from './tab-menus/HorizontalTabsMenu'
import SelectImagePane from './panes/SelectImagePane';
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
            <div style={{visibility:(this.props.visibility!==undefined?this.props.visibility:"visible")}}>
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
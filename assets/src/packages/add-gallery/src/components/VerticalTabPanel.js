import React from 'react';
import TabPanel from './elements/TabPanel'
import VerticalTabsMenu from './tab-menus/VerticalTabsMenu'
import ImagesPane from './panes/ImagesPane';
import ConfigPane from './panes/ConfigPane';
import MiscPane from './panes/MiscPane'
export default class VerticalTabPanel extends TabPanel{
    constructor(props){
        super(props);
        this.state={tabs:
            [
                {
                    name:'Images',
                    active:true
                },
                {
                    name:'Config',
                    active:false
                },
                {
                    name:'Misc',
                    active:false
                }
            ]
        }
    }
    paneRender({paneName}){
        switch(paneName){
            case 'Images':
                return <ImagesPane />
            case 'Config':
                return <ConfigPane /> 
            case 'Misc':
                return <MiscPane/>

        }
      
    }
    render(){
        return(
            <div style={{visibility:(this.props.visibility!==undefined?this.props.visibility:"visible")}} className="mt-5 tab-content vertical-tab-panel p-0 d-block d-sm-block d-md-block d-lg-flex d-xl-flex">
                <nav className="flex-row p-0  col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <VerticalTabsMenu className="gallery-side-tabs  nav nav-tabs border-0 d-flex d-sm-flex d-md-flex d-lg-block  d-xl-block" tabsList={this.state.tabs} ariaName="GalleryConfig" onClick={this.tabClickHandler} />
                </nav>
                <div className=" row m-0 pl-2 pt-2 bg-white d-flex justify-content-start flex-column  col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <this.paneRender paneName={this.getActiveTabName()} />
                </div>
            </div>
        )
    }
}
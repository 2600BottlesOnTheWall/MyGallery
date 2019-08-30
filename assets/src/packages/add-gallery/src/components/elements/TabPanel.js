import React from 'react';
/**
 * this class is parent for TabPanels.It uses to provide methods to child classes.
 */
export default class TabPanel extends React.Component{
    constructor(props){
        super(props)
        this.tabClickHandler=this.tabClickHandler.bind(this);
        
    }
  
    getActiveTabName(){
        var tabName;
        this.state.tabs.forEach(item=>{
            if(item.active)tabName=item.name;
        })
        return tabName
    }

    tabClickHandler(event){
        event.preventDefault();
        const tabId=event.target.dataset.tabId;
        const newTabState=this.state.tabs.map((item,key)=>{
            if(key==tabId){
                item.active=true;
            }else{
                item.active=false;
            }
            return item;
        })
        
        this.setState({tabs:newTabState});
    }
    render(){
        return (
            <div>
               
            </div>
            
        )
    }
}
import React from 'react';
import PropTypes from 'prop-types';

export class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={selected:false};
        this.options=this.options.bind(this);
    }
    options(){
        const optionsArray=this.props.options?this.props.options.map((item,key)=>{
            if(item.selected){
                return (
                    <option selected value={item.id} key={key.toString()}>{item.title}</option>
                )
            }
            return (
                <option value={item.id} key={key.toString()}>{item.title}</option>
            )
        }):[];
       
        return optionsArray;
    }
    render(){
        const className=this.props.className?this.props.className:'';
        return (
            <select className={"custom-select pl-3 "+className}>
                <this.options></this.options>
            </select>
        )
    }
}
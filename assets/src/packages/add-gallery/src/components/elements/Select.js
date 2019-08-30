import React from 'react';
import PropTypes  from 'prop-types';
/**
 * Select list element.
 */
export class Select extends React.Component{

    constructor(props){
        super(props);
        this.options=this.options.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    onChange(event){    
        this.props.onChange(event.currentTarget.selectedOptions[0].value,this.props.propName)
    }
    options(){
        const optionsArray=this.props.options?this.props.options.map((item,key)=>{
         
            return (
                <option value={item.id} key={key.toString()}>{item.title}</option>
            )
        }):[];
       
        return optionsArray;
    }
    render(){
        const className=this.props.className?this.props.className:'';
        const selected=this.props.selected;
        return (
            <select className={"custom-select pl-3 "+className} onChange={this.onChange} value={selected} >
                <this.options></this.options>
            </select>
        )
    }
}

Select.propTypes={
    options:PropTypes.array,
    selected:PropTypes.string,
    onChange:PropTypes.func.isRequired
}

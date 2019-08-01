import React from 'react';
import {Button} from '../components/elements/Button';
import {Select} from '../components/elements/Select';

export class SelectGroup extends React.Component{
    constructor(props){
        super(props);
        this.selectHandler=this.selectHandler.bind(this);
        this.onChange=this.onChange.bind(this);
        var selected=this.props.selected?this.props.selected:-1;
        this.state={selected}
    }
    onChange(id){
        this.setState({selected:id})
    }
    selectHandler(){
       
        this.props.onSelect(this.state.selected)
    }
    render (){
        const selected=this.state.selected!=this.props.selected&&this.state.selected!=-1?this.state.selected:this.props.selected;
        return(
            <div className="input-group mb-3">
                <Select options={this.props.options} onChange={this.onChange} selected={selected} ></Select>
                <Button className='btn btn-primary ml-2' onClick={this.selectHandler}>Get</Button>
            </div>
        )
    }
}


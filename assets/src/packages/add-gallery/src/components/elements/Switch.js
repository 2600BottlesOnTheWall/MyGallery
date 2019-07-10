import React from 'react';

export class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state={active:props.state};
        this.onClick=this.onClick.bind(this)
    }
    onClick(){
        this.setState({active:!this.state.active})
    }
    render(){
        return(
            <div className="switch" onClick={this.onClick}>
                <label>
                <span className={"lever"+(this.state.active?" on":"")}></span>
                </label>
            </div>
        )
    }
}
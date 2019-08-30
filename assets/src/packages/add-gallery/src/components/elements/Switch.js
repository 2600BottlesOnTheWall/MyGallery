import React from 'react';
import PropTypes  from 'prop-types';
/**
 * Switch element.
 */
export class Switch extends React.Component{
    constructor(props){
        super(props);

        this.onClick=this.onClick.bind(this)
    }
    onClick(){
        this.props.onChange(!this.props.state,this.props.propName);
    }
    render(){
        return(
            <div className="switch" onClick={this.onClick}>
                <label>
                <span className={"lever"+(this.props.state?" on":"")}></span>
                </label>
            </div>
        )
    }
}

Switch.propTypes={
    state:PropTypes.bool,
    onChange:PropTypes.func.isRequired
}
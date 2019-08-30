import React from 'react';
import {Input} from './Input';
import PropTypes  from 'prop-types';
/**
 * TextAria element
 */
export class TextAria extends Input{
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
        this.blurHandler=this.blurHandler.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange  (event)  {
        this.setState({value: event.target.value});
    }
    blurHandler  ()  {
        this.props.onBlur&&this.props.onBlur(this.state.value,this.props.propName);  
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value === this.state.value && prevProps.value !== this.props.value) {
            this.setState({value: this.props.value})
        }
    }
    render(){
        const className=this.props.className||'';
        return(
        <textarea className={'input-classnames '+className}  onChange={this.handleChange} onBlur={this.blurHandler} value={this.state.value}></textarea>
        )
    }
} 

TextAria.propTypes={
    value:PropTypes.string,
    onBlur:PropTypes.func.isRequired
}

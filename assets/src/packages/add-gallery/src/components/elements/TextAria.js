import React from 'react';
import {Input} from './Input';

export class TextAria extends Input{
    render(){
        return(
        <textarea {...this.props} onChange={this.handleChange} onBlur={this.blurHandler}>{this.state.value}</textarea>
        )
    }
} 
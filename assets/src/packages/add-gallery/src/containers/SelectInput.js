import React from 'react';
import {Button} from '../components/elements/Button';
import {Select} from '../components/elements/Select';

export class SelectInput extends React.Component{
  
    render (){
        const options=this.props.options||[];
        return(
            <div class="input-group mb-3">
                <Select {...options} ></Select>
                <Button className='btn btn-primary ml-2'>Get</Button>
            </div>
        )
    }
}
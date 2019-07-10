import React from 'react';
import {SelectInput} from './SelectInput';
import HorizontalTabPanel from '../components/HorizontalTabPanel'
import VerticalTabPanel from '../components/VerticalTabPanel'
import {Card} from '../components/Card'

export class Main extends React.Component{
    constructor(props){
        super(props);
      
      
    }
 
  
    render(){
        return (
            <div className='container pl-5 pl-sm-2 pl-md-2 pl-lg-2 pl-xl-2'>
                <div className="py-1 py-lg-4">
                    <h1 className="wp-heading-inline">Add new gallery</h1>
                </div>
                <div className="my-gallery-content-main d-flex flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row flex-xl-row pr-4 pr-sm-0">
                        <div className="my-gallery-content-left col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8  p-0">
                            <div>
                                <SelectInput />
                            </div>
                            <HorizontalTabPanel />
                            <VerticalTabPanel />
                    {
                        //my-gallery-content-left
                    }
                     </div>   
                     <div className="my-gallery-content-right col-12 h-50 pl-0 pl-sm-0 pl-md-0 pl-lg-3 pl-xl-3 mb-4 mb-sm-4 mb-md-4 mb-lg-4 mb-xl-4  mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0 pr-0  col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <Card shortcode="[my-gallery ids='543,435,675']"></Card>
                    {
                        // my-gallery-content-right
                    }
                     </div>
                {
                    // my-gallery-content-main
                }
                </div>
              
            </div>

        )
    }
}
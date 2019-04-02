import React from 'react';


function ShortcodeElementWrapper(){
return (class ShortcodeElement extends React.Component{
    render(){
 
        return (
            
           <p >
            <span className='my-gallery-shortcode'>
                {this.props.text}
            </span>  
           </p>
      
        )
    }
})
}
export default ShortcodeElementWrapper;
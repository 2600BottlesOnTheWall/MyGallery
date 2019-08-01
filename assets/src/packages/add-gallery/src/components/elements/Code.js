import React from 'react';

export class Code extends React.Component{
    render(){
        return(
                    <div className="my-gallery-shortcode mb-3">
                        <code>{this.props.children}</code>
                        <a href="#" title="Copy Shortcode to Clipboard" className="code-copy-to-clipboard dashicons dashicons-clipboard"></a>
                    </div>
        )
    }
} 
import React from 'react';

export class Code extends React.Component{
    constructor(props){
        super(props);
        this.copyCodeToClipboard=this.copyCodeToClipboard.bind(this);
    }
    copyCodeToClipboard(event){
        event.preventDefault();
        const textArea = document.createElement('textarea');
        textArea.textContent = this.props.children;
        textArea.setAttribute('position','absolute');
        textArea.setAttribute('left','-100%');
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    }
    render(){
        return(
                    <div className="my-gallery-shortcode mb-3">
                        <code>{this.props.children}</code>
                        <a href="#" title="Copy Shortcode to Clipboard" onClick={this.copyCodeToClipboard} className="code-copy-to-clipboard dashicons dashicons-clipboard"></a>
                    </div>
        )
    }
} 
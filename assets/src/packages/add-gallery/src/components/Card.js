import React from 'react';

export class Card extends React.Component{
    render(){
        return(
            <div class="my-gallery-card ">
                <div class="card-body">
                    <h5 class="card-title">My Gallery Code</h5>
                    <p class="card-text">You can place this gallery anywhere into your posts and pages or press "Add to post" button and shortcode will be added to your post.</p>
                    <div className="my-gallery-shortcode mb-3">
                        <code>{this.props.shortcode}</code>
                        <a href="#" title="Copy Shortcode to Clipboard" className="code-copy-to-clipboard dashicons dashicons-clipboard"></a>
                    </div>
                    <a href="#" class="btn btn-primary">Add to post</a>
                    </div>
            </div>
        )
    }
} 
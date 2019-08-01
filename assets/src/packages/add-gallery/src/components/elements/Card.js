import React from 'react';

export class Card extends React.Component{
    render(){
        return(
            <div className={"my-gallery-card mb-3 "+this.props.className} style={this.props.style} id={this.props.id}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    
                    {this.props.children}
                   
                    
                    </div>
            </div>
        )
    }
} 
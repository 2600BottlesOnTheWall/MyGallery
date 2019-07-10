import React from 'react';
import SortableImageList from './elements/SortableImageList';
import arrayMove from 'array-move';
export default class GallerySortable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:this.props.items
        }
        this.onSortEnd=this.onSortEnd.bind(this);
    }
    onSortEnd ({oldIndex, newIndex}) {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
      };
      render() {
        return <SortableImageList axis="xy" items={this.state.items} onSortEnd={this.onSortEnd} />;
      }
}
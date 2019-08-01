import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableImageItem = SortableElement(({value}) => <li className="bg-light text-center p-0 m-2">{value}</li>);
const SortableImageList = SortableContainer(({items}) => {
    return (
      <ul className="list-unstyled d-flex flex-wrap justify-content-center pt-2 pb-2">
        {items.map((value, index) => (
          <SortableImageItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

export default SortableImageList; 
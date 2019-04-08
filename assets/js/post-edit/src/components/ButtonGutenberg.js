import React from 'react';

function ButtonGutenberg (props){
    return (
        <button
        className="editor-block-types-list__item editor-block-list-item-gallery"
        aria-label="Gallery"
        onClick={props.onClick}>
        <span className="editor-block-types-list__item-icon">
            <span className="editor-block-icon has-colors">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <g>
                        <path d="M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z"></path>
                        <path d="M12 12l1 2 3-3 3 4H9z"></path>
                        <path d="M2 6v14l2 2h14v-2H4V6H2z"></path>
                    </g>
                </svg>
            </span>
        </span>
        <span className="editor-block-types-list__item-title">MyGallery</span>
    </button>
    )
}

export default ButtonGutenberg;
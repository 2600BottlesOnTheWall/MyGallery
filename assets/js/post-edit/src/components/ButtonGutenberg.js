import React from 'react';

function ButtonGutenberg(props) {
    return (
        <button
            className="editor-block-types-list__item block-editor-block-types-list__item editor-block-list-item-gallery"
            aria-label="Gallery"
            onClick={props.onClick}>
            <span className="editor-block-types-list__item-icon block-editor-block-types-list__item-icon">
                <span className="editor-block-icon block-editor-block-icon has-colors">
                <svg width="24" height="24" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
                    <path fill="#E65100" d="M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"/>
                    <path fill="#F57C00" d="M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"/>
                    <circle fill="#FFF9C4" cx="30" cy="16" r="3"/>
                    <polygon fill="#942A09" points="17,17.9 8,31 26,31"/>
                    <polygon fill="#BF360C" points="28,23.5 22,31 34,31"/>
                </svg>
                </span>
            </span>
            <span className="editor-block-types-list__item-title">MyGallery</span>
        </button>
    )
}

export default ButtonGutenberg;
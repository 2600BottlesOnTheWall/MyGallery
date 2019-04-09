import React from "react";
import ReactDOM from "react-dom";
import MediaFrame from "./components/MediaFrame";
import ButtonGutenberg from "./components/ButtonGutenberg";
import ButtonClassic from "./components/ButtonClassic";

/**
 * Renders and insert React component in gutenberg editor tools container,
 * insert in menu list after menu will be rendered.
 *
 */
export function myGalleryGutenberg() {
    const liElement = document.createElement("li");
    liElement.className = "editor-block-types-list__list-item";
    ReactDOM.render(
        <MediaFrame button={ButtonGutenberg}/>, liElement);
    const menuButton = document.querySelector(".editor-inserter");
    menuButton.addEventListener("click", () => {
        window.setTimeout(() => {
            const el = document.querySelector(".editor-block-types-list");
            el && el.prepend(liElement);
        }, 10);
    });
}

/**
 * Renders and insert React component in classic editor tools container.
 *
 */
export function myGalleryClassic() {
    const divElement = document.createElement("div"),
        toolsContainer = document.querySelector(".wp-editor-tools");
    divElement.className = "editor-button-container";
    ReactDOM.render(
        <MediaFrame button={ButtonClassic}/>, divElement);
    toolsContainer.append(divElement);
}

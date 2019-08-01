import React from 'react';

export default function HorizontalTabsMenu ({tabsList,onClick,ariaName,className}){
    const tabs=tabsList.map((item,key)=>{
        return (
            <li className="nav-item" key={key.toString()} data-tab-id={key} >
                <a className={"nav-link"+(item.active?" active":"")} data-toggle="tab" href="#" data-tab-id={key} role="tab" aria-selected={item.active?"true":"false"} onClick={onClick}>{item.name}</a>
            </li>
        )
    }
    )
    return(
        <ul className={className} data-aria-name={ariaName} role="tablist">
            {tabs}
        </ul>
    )
} 
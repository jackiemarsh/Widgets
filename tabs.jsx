import React, { useState } from 'react';

function Tabs(props)  {

    const [index, setIndex] = React.useState(0)
    // const content = props.tabInfo[index]

    const tabHeaders = props.tabInfo.map((header, idx) => {
        return(
            <li className="tab-header" key={idx} onClick={() => setIndex(idx)}>
                {idx}
                :
                {header.title}
            </li>
        )
    })

    return(
        <div className="main-tabs">
            <h1>Tabby Tabby</h1>
            <ul className="tab-container">
                {tabHeaders}
            </ul>
            <div className="tab-content">
                <span>
                   {props.tabInfo[index].content}
                </span>
            </div>
        </div>
    );
};

export default Tabs;
import React, { useState } from 'react';

function Tabs(props)  {

    const [index, setIndex] = React.useState(0)
    // const content = props.tabInfo[index]
    const tabHeaders = props.tabInfo.map((header, idx) => {
        const activeClass = idx === index ? "active" : ""
        return(
            <div className="tab-header">   
                <li className={activeClass} key={idx} onClick={() => setIndex(idx)}>
                    {idx}
                    :
                    {header.title}
                </li>
            </div> 
        )
    })

    return(
        <div className="main-tabs">
            <h1>Tabby Tabby</h1>
            {/* <div className="tab-container"> */}
                <ul className="tab-container">
                    {tabHeaders}
                </ul>
                <div className="tab-content">
                    <span>
                       {props.tabInfo[index].content}
                    </span>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Tabs;
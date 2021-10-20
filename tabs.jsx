import React, { useState } from 'react';

// function Headers(props) {
//     const headers = props.map()
//     return(
//         <div>
//             <li
//             key={index}
//             className="tab-header"
//             onClick={props.selectTab(index)}>
//             </li>
//         </div>
//     )
// }

function Tabs(props)  {

    const [index, setIndex] = React.useState(0)
    // const content = props.tabInfo[index]
    const tabHeaders = props.tabInfo.map((header, idx) => {
        return(
            <li className="tab-header" key={idx}>
                {idx}
                :
                {header.title}
            </li>
        )
    })

    return(
        <div>
            <h1>Tabby Tabby</h1>
            <ul>
                {tabHeaders}
            </ul>
            <div>
                <span>
                   
                </span>
            </div>
        </div>
    );
};

export default Tabs;
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
    const content = props.tabInfo[index]

    return(
        <div>
            <h1>Tabby Tabby</h1>
            <ul>
                {/* <Headers /> */}
            </ul>
            <div>
                <span>
                    {content}
                </span>
            </div>
        </div>
    );
};

export default Tabs;
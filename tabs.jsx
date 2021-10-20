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

    return(
        <div>
            <ul>
                <h1>Tabby Tabby</h1>
            </ul>
        </div>
    );
};

export default Tabs;
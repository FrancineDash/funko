import React from 'react';
import Data from "./Data";

function Box (){

    const [img] = React.useState ("img" in Data);
    const [name] = React.useState ("name" in Data);
    const [category] = React.useState ("category" in Data);
    const [value] = React.useState ("value" in Data);

    let flexContainer={
        display: 'flex',
        flexDirection: 'column',
        fontSize: '30px',
        textAlign: 'center',

    }

    return (
        <div className= {Data} style={flexContainer}>
            <div>{img}</div>
            <div>{name}</div>
            <div>{category}</div>
            <div>{value}</div>

        </div>
    )

}




export default Box;

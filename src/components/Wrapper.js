import React from 'react';
import Box from "./Box";
import Data from "./Data";

function Wrapper(){

    const dataEles = Data.map((di, idx)=>
    <Data name={di.name} category={di.category} value={di.value} img={di.img} key={idx} />
    );

    return (
        <div className = {Box}>{dataEles}</div>

    )
}

export default Wrapper;
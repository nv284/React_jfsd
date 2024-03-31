import React from "react";

function Myfun(props){
    const name = props.name;
    return (
        <div>
            <h1 >Hello Functional Component</h1>
            <h1>Hello , {name}</h1>
        </div>
    )
}
export  default Myfun;
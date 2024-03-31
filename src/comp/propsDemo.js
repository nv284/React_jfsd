import React from "react";

function Tool ({name , age , skill}){
return(
    <div>
        <h2> HI I am , {name}</h2>
        <h2>I am {age} years old and have 12 years of working experience </h2>
        <h2>My major skill is {skill}</h2>
    </div>
)
}
Tool.defaultProps ={
    name:"John Doe",
    age:35,
    skill :"React Js"
}
export default Tool;
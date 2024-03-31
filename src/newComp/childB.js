import React from "react";

function ChildCompB1 ({message , setMessage}){
    return(
        <div>
            <h2>Child Component  B</h2>
            <p>{message}</p>
            <button onClick={()=>setMessage(" Updated message from child Component B ")}>Update Message</button>
        </div>
    );
}

export default ChildCompB1;
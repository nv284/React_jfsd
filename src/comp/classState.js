import React from "react";

class Mycomponent extends React.Component{
constructor(props){
    super(props);
    this.state = {brand:"honda"};
    
    }
    changeBrand=()=>{
        this.setState({brand: 'toyota'});
    }
render(){
    return(
        <div>
            <h1> My new Car {this.state.brand}</h1> 
            <button  onClick={this.changeBrand}>change Brand</button>
        </div>
    )
}

}
export default Mycomponent;
    
    
    

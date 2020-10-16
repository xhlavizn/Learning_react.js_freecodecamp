import React from "react";



function Conditional (props){
  console.log(props.isLoading)
  return(
    <div>
  {props.isLoading === true ? <h1>Loading..</h1> :   <h1>Loaded</h1>}
 
  </div>
 )
}

export default Conditional
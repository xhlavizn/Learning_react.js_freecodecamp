import React from "react";

class LogonCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    this.ClickLogin=this.ClickLogin.bind(this)
    }

    ClickLogin(){
      console.log("clicked Login")
      
      
      this.setState((prevState)=> {
        return {
          isLoggedIn:!prevState.isLoggedIn 
          
        }
        
  })
 
}
  
  render() {
    let buttonDisplay
    let wordDisplay

    if (this.state.isLoggedIn) {
      buttonDisplay = "out";
      wordDisplay = "in";
    } else {
      buttonDisplay = "in";
      wordDisplay = "out";
    }
    console.log(this.state.isLoggedIn)
    console.log("jsem piča rendruju se dvakrat")

    return (
      <div>
        <h3><button onClick={this.ClickLogin}>Log {buttonDisplay}</button> </h3>
        <h3> Logged {wordDisplay}  </h3>
      </div>
    );
  }
}

export default LogonCheck;

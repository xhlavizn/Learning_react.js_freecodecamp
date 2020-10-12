import React from "react";

class LogonCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }

    return (
      <div>
        <h3> You are currently logged {wordDisplay} </h3>
      </div>
    );
  }
}

export default LogonCheck;

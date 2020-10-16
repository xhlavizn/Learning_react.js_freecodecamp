import React from "react";

class ChangePlease extends React.Component{
  constructor(){
    super()
    this.state={
      count: 0
    }
    this.ClickCounter=this.ClickCounter.bind(this)

  }

  ClickCounter (){
    console.log("clicked counter")
    this.setState((prevState)=> {
      return {
        count:prevState.count + 1

      }

    })
  }


render(){
  return(

      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.ClickCounter}>Change!</button>

      </div>
  )

}

}

export default ChangePlease
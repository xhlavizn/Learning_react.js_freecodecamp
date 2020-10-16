import React, {Component} from "react";
import Conditional from "./Conditional"


class Loading extends Component{
  constructor(){
      super()
      this.state={
        isLoading:true
      }
    }
  componentDidMount(){
      setTimeout(()  => {
          this.setState({
              isLoading:false
          })



      } ,6000)




  }

  render(){
   return(
      <div>
        <Conditional isLoading={this.state.isLoading}/>

      </div>

        )
    

  }

 


}

export default Loading



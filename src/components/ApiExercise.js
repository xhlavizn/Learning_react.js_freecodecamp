import React from "react";
import products from "./productsData";

class ApiExercise extends React.Component{
    constructor(){
      super()
      this.state = {
        loading: false,
        character: {}

      }

    }

    componentDidMount(){
      this.setState({loading: true})
      console.log("Hi!")
      fetch("https://swapi.dev/api/people/1/")
          .then(response => response.json())
          .then(data =>{ console.log (data)
                      this.setState({
                        loading:false,
                        character: data}
                        

                        
                      )
          
                    })
       

    }




render(){
  const text = this.state.loading ? "Loading...":this.state.character.name
  return(
<div>
<div> Api exercise: {text}  </div>


</div>
  )



}

}







export default ApiExercise
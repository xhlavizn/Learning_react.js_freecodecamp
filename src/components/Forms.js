import React from "react"
import { render } from "react-dom"

class FormExercise extends React.Component {
    constructor (){
      super()
      this.state = {
        firstName:"",
        lastName:"",
        isFriendly: true,
        gender: "No sex",
        favColor: "blue"
      }
        this.handleChange = this.handleChange.bind(this)
      


    }

    handleChange(event){
      const {name, value, type,checked, favColor}= event.target
      console.log(this.state.favColor)
      console.log(this.state.gender)
      type === "checkbox" ? this.setState({ [name]: checked}) :  this.setState({ [name]: value    })
      
    
          

     

    }

    render(){

      return(
        <div>

        <form>

          <input type="text" value={this.state.firstName} name="firstName" placeholder="Toník" onChange={this.handleChange} />
          <input type="text" value={this.state.lastName}  name="lastName"  placeholder="Hlavizňík" onChange={this.handleChange} />


          <h1> {this.state.firstName+ " " +this.state.lastName}    </h1>

        </form>
        <textarea value={"Some default value"}     />
        <input 
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}  
                
                />
<br/>
      <label>
        <input type="radio" 
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}

                />
                  Female
      </label>


      
      <label>
        <input type="radio" 
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}

                />
                  Male
      </label>

      <h2>
        You are a {this.state.gender}
      </h2>

      <select value ={this.state.favColor} name="favColor" onChange={this.handleChange}>
          <option value="blue"> Blue </option>
          <option value="red"> Red </option>
          <option value="black"> Black </option>
      </select>  

      <h2>
        Favorite color is {this.state.favColor}
      </h2>


        </div>

        )
    }



}




export default FormExercise
 
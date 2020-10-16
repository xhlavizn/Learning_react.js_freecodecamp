import React from "react"



function TravelForm_dumb (props){

return (

<main>
        <form onSubmit={props.handleSubmit} className="form">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={props.handleChange}
          />{" "}
          {props.data.firstName} <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={props.handleChange}
          />{" "}
          {props.data.lastName} <br />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={props.handleChange}
          />{" "}
          {props.data.age} <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange}
            />{" "}
            Male{" "}
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}
            />{" "}
            Female{" "}
          </label>{" "}
          <br />
          <select
            value={props.data.destinace}
            name="destinace"
            onChange={props.handleChange}
          >
            <option value="Náměšť"> Tak si vyber omg </option>
            <option value="Náměšť"> Náměšť </option>
            <option value="Vícky"> Vícky </option>
            <option value="Puné"> Puné </option>
          </select>
          {props.data.destinace}
          <br />
          Restriction: <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={props.data.isVegan}
              onChange={props.handleChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="isKokot"
              checked={props.data.isKokot}
              onChange={props.handleChange}
            />
            Kokot
          </label>
          <label>
            <input
              type="checkbox"
              name="isCyklista"
              checked={props.data.isCyklista}
              onChange={props.handleChange}
            />
            Cyklista
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        First Name: {props.data.firstName} <br />
        LastName:{props.data.lastName} <br />
        Age: {props.data.age} <br />
        Destinace: {props.data.destinace} <br />
        Gender: {props.data.gender} <br />
        Restrictions:
        <li> Vegan: {props.data.isVegan ? "Yes" : "No"} </li>
        <li> Kokot: {props.data.isKokot ? "Yes" : "No"} </li>
        <li> Cyklista: {props.data.isCyklista ? "Yes" : "No"} </li>
      </main>

      )
   
  }



export default TravelForm_dumb
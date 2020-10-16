import React, { Component } from "react";
import { render } from "react-dom";
import TravelForm_dumb from "./TravelForm_dumb";

class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destinace: "",
      isVegan: false,
      isKokot: false,
      isCyklista: false
    };

    (this.handleChange = this.handleChange.bind(this)),
      (this.handleSubmit = this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    alert("A Form was submitted: " + this.state.firstName);
    event.preventDefault();
  }

  handleChange(event) {
    const { value, checked, name, type } = event.target;

    //type === "checkbox" ? this.setState({ [name]: checked}) :
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });

    console.log(this.state.isVegan);
  }

  render() {
    return(
          <TravelForm_dumb handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
    )
        }

      }

export default TravelForm;

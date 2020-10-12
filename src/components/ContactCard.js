import React from "react";

export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="contact-card">
        <img src={this.props.imgUrl} className="img" />
        <h3> {this.props.name} </h3>
        <p> {this.props.phone} </p>
        <p> {this.props.email} </p>
      </div>
    );
  }
}

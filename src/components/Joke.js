import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      <h3> {props.question} </h3>
      <p> {props.punchline} </p>
    </div>
  );
}

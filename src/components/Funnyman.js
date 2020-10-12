import React from "react";
import Joke from "./Joke";
import JokesData from "./JokesData";

export default function Funnyman() {
  const jokeComponents = JokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  return <div>{jokeComponents}</div>;
}

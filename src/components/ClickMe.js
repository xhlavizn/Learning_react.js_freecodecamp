import React from "react";

function handleClick() {
  console.log("I was clicked");
}

function handleHover() {
  console.log("I was hovered!");
}

function ClickMe() {
  return (
    <div>
      <img src="http://www.fillmurray.com/200/100" onMouseOver={handleHover} />
      <br />
      <br />
      <button onClick={handleClick}> Click me </button>
    </div>
  );
}

export default ClickMe;

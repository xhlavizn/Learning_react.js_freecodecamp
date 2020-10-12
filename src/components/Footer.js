import React from "react";

export default function Footer() {
  const styles = { color: "#FF8C00", backgroundColor: "#FF2D00", fontSize: 18 };

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "am";
  } else {
    timeOfDay = "pm";
  }

  return (
    <div>
      <footer>
        {" "}
        <h1 style={styles}>
          {" "}
          Current time: {(hours % 12) + ":" + minutes + timeOfDay}{" "}
        </h1>{" "}
      </footer>
    </div>
  );
}

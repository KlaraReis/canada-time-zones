import React from "react";

const Clock = ({ tzParam }) => {
  return (
    <div id="clock">
      <p> {new Date().toLocaleString("en-CA", { timeZone: tzParam })}</p>
    </div>
  );
};

export default Clock;

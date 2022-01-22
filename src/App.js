import React, { useState } from "react";
import Clock from "./Clock";
import TzList from "./TzList";
import Map from "./Map";
import "./App.css";

const App = () => {
  const [currentTZ, setCurrentTZ] = useState("America/Toronto");

  return (
    <>
      <TzList tzArg={currentTZ} onTzChange={setCurrentTZ} > </TzList>
     <Map tzMap={currentTZ} > </Map>

      <Clock tzParam={currentTZ} > </Clock>
    </>
  );
};

export default App;

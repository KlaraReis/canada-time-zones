import React from "react";

const Map = ({ tzMap }) => {
  let source;
  switch (tzMap) {
    case "America/Vancouver":
      source = "https://c.tadst.com/gfx/tzpage/pst.1636282800.png?1447";
      break;
    case "America/Edmonton":
      source = "https://c.tadst.com/gfx/tzpage/mst.1636282800.png?1447";
      break;
    case "America/Winnipeg":
      source = "https://c.tadst.com/gfx/tzpage/cst.1636282800.png?1447";
      break;
    case "America/Toronto":
      source = "https://c.tadst.com/gfx/tzpage/est.1636282800.png?1447";
      break;
    case "America/Halifax":
      source = "https://c.tadst.com/gfx/tzpage/ast.1636282800.png?1447";
      break;
    case "America/St_Johns":
      source = "https://c.tadst.com/gfx/tzpage/nst.1636282800.png?1447";
      break;
    default:
      source = "";
      break;
  }
  return (
    <div id="map">
      <img src={source} width="450" height="450"></img>
    </div>
  );
};

export default Map;

import React from "react";
import { timeZones } from "./timeZones";

const TzList = ({ tzArg, onTzChange }) => {
  return (
    <div id="timezone-list">
      <ul>
        {timeZones.map((tz) => (
          <div onClick={() => onTzChange(tz.key)}>
            <a href="javascript:void(0)">
              {tzArg === tz.key && (
                <li>
                  <strong>{tz.label}</strong>
                </li>
              )}
              {tzArg !== tz.key && <li>{tz.label}</li>}
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TzList;

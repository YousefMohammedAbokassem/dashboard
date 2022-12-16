import React from "react";

export default function Lables({ main }) {
  return (
    <label>
      <li className="d-flex ps-5 my-2">
        <input className="checkBox" type="checkbox" />
        <div className="checkDiv">{main}</div>
      </li>
    </label>
  );
}

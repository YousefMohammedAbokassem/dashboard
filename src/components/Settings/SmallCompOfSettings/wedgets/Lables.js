import React from "react";

export default function Lables({ main, checks }) {
  return (
    <label>
      <li className="d-flex ps-5 my-2">
        <input className="checkBox" type="checkbox" checks />
        <div className="checkDiv">{main}</div>
      </li>
    </label>
  );
}

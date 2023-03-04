import React from "react";
import "./toggle.scss"
export default function Toggle() {
  return (
    <label>
      <input className="check-toggle" type="checkbox" />
      <div className="check"></div>
    </label>
  );
}

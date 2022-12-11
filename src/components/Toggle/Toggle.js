import React from "react";
import "./toggle.css"
export default function Toggle() {
  return (
    <label>
      <input className="check-toggle" type="checkbox" />
      <div className="check"></div>
    </label>
  );
}

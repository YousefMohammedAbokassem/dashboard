import React from "react";

export default function SocialChild({ icon, Span, Button }) {
  return (
    <div className="socialChild  d-flex align-items-center justify-content-between mb-2">
      <div className="info  d-flex align-items-center">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <span>{Span}</span>
      </div>
      <button>{Button}</button>
    </div>
  );
}

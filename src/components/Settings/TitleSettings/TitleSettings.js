import React from "react";
import "./titleset.css"
export default function Title({ main, name }) {
  return (
    <div className="mb-4  text-center text-md-start">
      <h2 className="fw-bold h2Sett">{main}</h2>
      <h6 className="opacity-75 h6Sett">{name}</h6>
    </div>
  );
}

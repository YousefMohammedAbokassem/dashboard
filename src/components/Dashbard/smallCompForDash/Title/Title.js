import React from "react";

export default function Title({ main, name }) {
  return (
    <p>
      <h4 className="fw-bold">{main}</h4>
      <h5 className="opacity-75">{name}</h5>
    </p>
  );
}

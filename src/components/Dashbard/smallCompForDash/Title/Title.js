import React from "react";

export default function Title({ main, name }) {
  return (
    <div className="text-center text-md-start mb-4 ">
      <h4 className="fw-bold">{main}</h4>
      <h5 className="opacity-75">{name}</h5>
    </div>
  );
}

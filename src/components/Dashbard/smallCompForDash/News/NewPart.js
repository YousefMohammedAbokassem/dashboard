import React from "react";

export default function NewPart({ img, main, second, Span }) {
  return (
    <div className="pb-md-2 pb-4 newsPart d-flex align-items-center justify-content-between flex-md-row flex-column">
      <div className="cont pt-4 pb-2 py-md-2 d-flex align-items-center justify-content-start flex-grow-1 flex-column  flex-md-row text-center text-md-start ">
        <img className="me-2" src={img} alt="x" />
        <div className="info">
          <h6 className=" fw-bold my-2">{main}</h6>
          <h6 className="opacity-50">{second}</h6>
        </div>
      </div>
      <span>{Span} Days Ago</span>
    </div>
  );
}

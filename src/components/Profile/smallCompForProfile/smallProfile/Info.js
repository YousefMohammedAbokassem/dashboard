import React from "react";
import Toggle from "../../../Toggle/Toggle";

export default function Info({
  Title,
  First,
  firstName,
  second,
  secondName,
  third,
  thirdName,
}) {
  return (
    <div className="fs-5 info  flex-grow-1 px-3 text-lg-start text-center">
      <div className="fs-5 title opacity-75">{Title}</div>
      <div className="fs-5 firstInfo">
        <span className="fs-5 opacity-75 text-capitalize">{First}</span>
        <span className="fs-5 text-capitalize ms-2">{firstName}</span>
      </div>
      <div className="fs-5 firstInfo">
        <span className="fs-5 opacity-75 text-capitalize">{second}</span>
        <span className="fs-5 text-capitalize ms-2">{secondName}</span>
      </div>
      <div className="fs-5 firstInfo">
        <span className="fs-5 opacity-75 text-capitalize">{third}</span>
        <span className="fs-5text-capitalize ms-2">{thirdName}</span>
      </div>
      <div className="tog text-lg-end text-center">
        <Toggle />
      </div>
    </div>
  );
}

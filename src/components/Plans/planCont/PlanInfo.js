import React from "react";
import PlanInfoCont from "./PlanInfoCont";

export default function PlanInfo({ Span ,icon}) {
  return (
    <div className="info d-flex justify-content-between align-items-center py-3">
      <div className="signal d-flex align-items-center ">
        <i className={icon}></i>
        <span className="fs-5">{Span}</span>
      </div>
      <i className="fa-solid fa-circle-info help c-grey fs-5 " title="Help"></i>
    </div>
  );
}

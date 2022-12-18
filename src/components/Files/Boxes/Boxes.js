import React from "react";
import Box from "./Box";
import BoxCont from "./BoxCont";

export default function Boxes() {
  return (
    <div
      className="col-lg-8 my-3 wow animate__slideInLeft"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="boxes position-relative  h-100 radius-6">
       <BoxCont />
      </div>
    </div>
  );
}

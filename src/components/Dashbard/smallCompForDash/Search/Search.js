import React from "react";
import Title from "../Title/Title";
import SearchChildren from "./SearchChilden";

export default function Search() {
  return (
    <div
      className="col-xl-6 col-xxl-4  h-auto my-3 wow animate__slideInLeft"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="search  h-100 p-3">
        <Title main="Top Search Items" />
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="opacity-50">Keyword</span>
            <span className="opacity-50">Search Count</span>
          </div>
        </div>
        < SearchChildren/>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { Language } from "../Container/Container";
import { useContext } from "react";

export default function Price({ classes, price, part, detail }) {
  const language = useContext(Language);
  useEffect(()=>{
    const percent = document.querySelectorAll(".percent");
  },[])
  return (
    <div className=" col-lg-4 col-md-6">
      <div className="price px-3 py-md-4 py-4 d-flex align-items-center justify-content-center my-2 bg-boxes">
        <span className={classes}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <div className="forZIndex">
          <h3>
            <div>
              {price}
              <span className={`${language == "ar" ? "ar" : ""} percent`}>
              </span>
            </div>
          </h3>
          <small>{detail}</small>
        </div>
        <div className="animation position-absolute">ani</div>
      </div>
    </div>
  );
}

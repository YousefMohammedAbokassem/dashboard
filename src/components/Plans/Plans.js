import React, { useEffect } from "react";
import "./plans.scss";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import PlanInfoCont1 from "./planCont/PlanInfoCont";
import PlanInfoCont2 from "./planCont/PlanInfoCont2";
import PlanInfoCont3 from "./planCont/PlanInfoCont3";
export default function Plans() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Plans";
  }, []);
  return (
    <div
      className="plans container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Plans" />
      <div className="row p-1 p-md-3  mt-5">
        <div
          className="col-xxl-6 my-3 wow animate__slideInLeft"
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="planBox position-relative p-3 h-auto radius">
            <div className="price priceGreen bg-green p-4 mb-4">
              <h2>Free</h2>
              <h1>$0.00</h1>
            </div>
            <PlanInfoCont1 />
            <button className="border-0 bg-green px-3 py-2 mt-3 radius-6 fw-bold text-white me-auto d-block fs-5">
              Join
            </button>
          </div>
        </div>
        <div
          className="col-xxl-6 my-3 wow animate__slideInLeft"
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="planBox position-relative p-3 h-auto radius">
            <div className="price priceBlue bg-blue p-4 mb-4">
              <h2>Basic</h2>
              <h1>$7.99</h1>
            </div>
            <PlanInfoCont2 />
            <button className="border-0 bg-blue px-3 py-2 mt-3 radius-6 fw-bold text-white me-auto d-block fs-5">
              Join
            </button>
          </div>
        </div>
        <div
          className="col-xxl-6 my-3 wow animate__slideInLeft"
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="planBox position-relative p-3 h-auto radius">
            <div className="price priceOrange bg-orange p-4 mb-4">
              <h2>Premium</h2>
              <h1>$19.99</h1>
            </div>
            <PlanInfoCont3 />
            <p className="mt-4 fs-3 opacity-75">This Is Your Current Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

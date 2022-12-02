import React from "react";
import { Link } from "react-router-dom";
import Page from "../Page/Page";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard p-4 ">
      <Page page="Dashboard" />
      <div className="container row mt-5 parent px-0 ">
        {/* start column */}
        <div className="col-xl-6  ">
          <div className="container-fluid Container p-0 welcome">
            {/* 1 */}
            <div className="d-flex justify-content-between align-items-center p-3">
              <p>
                <h4 className="fw-bold">WELCOME</h4>
                <h5 className="opacity-75">AYA</h5>
              </p>
              <img src="/dashboard/images/welcome.png" alt="" />
            </div>
            {/* 2 */}
            <img src="/dashboard/images/me.png" className="d-block " alt="" />
            {/* 3 */}
            <div className="info d-flex justify-content-evenly align-items-center p-3 flex-md-row flex-column">
              <div className="d-flex flex-column justify-content-center align-items-center m-md-0 my-2">
                <span className="text-capitalize">Aya Alahmmar</span>
                <span className="text-capitalize opacity-75">Designer</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center m-md-0 my-2">
                <span className="text-capitalize">80</span>
                <span className="text-capitalize opacity-75">projects</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center m-md-0 my-2">
                <span className="text-capitalize">$8000</span>
                <span className="text-capitalize opacity-75">Earned</span>
              </div>
            </div>
            {/* 4 */}
            <Link to="/profile" className="text-decoration-none">
              Profile
            </Link>
          </div>
        </div>
        {/* end column */}
        {/* start column */}
        <div className="col-xl-6">
          <div className="container">yousef</div>
        </div>
        {/* end column */}
      </div>
    </div>
  );
}

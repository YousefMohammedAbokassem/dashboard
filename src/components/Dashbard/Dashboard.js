import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "./smallCompForDash/Page/Page";
import Title from "./smallCompForDash/Title/Title";
import "./dashboard.css";
import Progress from "./smallCompForDash/Progress/Progress";
import Tickets from "./smallCompForDash/tickets/Tickets";
import News from "./smallCompForDash/News/News";
export default function Dashboard() {
  useEffect(() => {}, []);
  return (
    <div
      className="dashboard p-4 container wow animate__fadeIn"
      data-wow-duration="1s"
    >
      <Page page="Dashboard" />
      <div className="container row mt-5 parent px-0  ">
        {/* start column */}
        <div
          className="col-xl-6 my-3 wow animate__slideInLeft"
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="container-fluid Container p-0 h-100 welcome">
            {/* 1 */}
            <div className="d-flex justify-content-between align-items-center p-3">
              <Title main="WELCOME" name="AYA" />
              <img
                className="d-md-block d-none"
                src="/dashboard/images/welcome.png"
                alt=""
              />
            </div>
            {/* 2 */}
            <img
              src="/dashboard/images/activity-02.png"
              className="d-block "
              alt=""
            />
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
            <Link to="/profile/" className="text-decoration-none">
              Profile
            </Link>
          </div>
        </div>
        {/* end column */}
        {/* start column */}
        <div
          className="col-xl-6 quickDraftParent my-3 wow animate__slideInRight "
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="quickDraft p-3 h-100 ">
            <Title main="Quick Draft" name="Write A Draft For Your Ideas" />
            <form className="d-flex justify-content-center align-items-center flex-column">
              <input
                className="w-100 border-0"
                type="text"
                placeholder="Title"
              />
              <textarea
                className="w-100 my-3 border-0"
                placeholder="Your Though"
              ></textarea>
              <input type="submit" value="save" />
            </form>
          </div>
        </div>
        {/* end column */}
        {/* start column */}
        <div
          className="col-xl-6 my-3 wow animate__slideInLeft"
          data-wow-duration="0.5s"
          data-wow-offset="200"
        >
          <div className="targets d-md-block d-flex flex-column  h-100 p-3 ">
            <Title main="Yearly Targets" name="Targets Of The Year" />
            {/* 1 */}
            <Progress
              TheClass="target 80 d-flex align-items-center justify-content-between my-3 "
              icon="fa-solid fa-dollar-sign fa-lg  "
              title="Money"
              number="$20.000"
              width="80"
              IconParentClass="TheIcon firstIcon"
              progress="progres progres1 bg-blue position-relative"
              spans="bg-blue"
            />
            {/* 2 */}
            <Progress
              TheClass="target 55 d-flex align-items-center justify-content-between my-3"
              icon="fa-solid fa-code fa-lg "
              title="Project"
              number="24"
              width="55"
              IconParentClass="TheIcon secondIcon"
              progress="progres progres2 bg-orange position-relative "
              spans="bg-orange"
            />
            {/* 3 */}
            <Progress
              TheClass="target 75 d-flex align-items-center justify-content-between my-3"
              icon="fa-solid fa-user fa-lg  "
              title="Team"
              number="12"
              width="75"
              IconParentClass="TheIcon thirdIcon"
              progress="progres progres3 bg-green position-relative "
              spans="bg-green"
            />
          </div>
        </div>
        {/* end column */}
        {/* start column */}
        <Tickets />
        {/* end column */}
        {/* start column */}
        <News />
        {/* end column */}
      </div>
    </div>
  );
}

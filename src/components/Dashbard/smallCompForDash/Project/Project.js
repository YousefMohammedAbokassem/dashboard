import React from "react";
import Title from "../Title/Title";
import Lis from "./Lis";

export default function Project() {
  return (
    <div
      className="col-xl-6 col-xxl-4 my-3 h-auto wow animate__slideInLeft"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="project p-3 h-100">
        <Title main="Last Project Progress" />
        <ul className="list-unstyled">
          <Lis main="Got The Project" />
          <Lis main="Started The Project" />
          <Lis main="The Project About To Finish" />
          <Lis main="Test The Project" />
          <Lis main="Finish The Project & Get Money" />
        </ul>
        <img className="d-md-block d-none " src="/dashboard/images/project.png" alt="" />
      </div>
    </div>
  );
}

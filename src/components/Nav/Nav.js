import React, { useEffect } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav className=" h-100 position-relative p-md-4 w-100">
      <div className="my-4 ">
        <h2 className="d-flex justify-content-center align-items-center fw-bold ">
          AYA
        </h2>
        <hr className="w-75 mx-auto mt-3 opacity-100  d-none d-md-block "></hr>
      </div>
      <NavLink
        to="/dashboard/"
        className="d-flex p-2 my-2 fw-bold ms-0 ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
        id="activeLink"
      >
        <i className="fa-regular fa-chart-bar fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block  ">
          dashboard
        </span>
      </NavLink>
      <NavLink
        to="/setting/"
        className="d-flex p-2 my-2  fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-solid fa-gear fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          setting
        </span>
      </NavLink>
      <NavLink
        to="/profile/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none "
      >
        <i className="fa-regular fa-user fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          profile
        </span>
      </NavLink>
      <NavLink
        to="/projects/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-solid fa-diagram-project fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          projects
        </span>
      </NavLink>
      <NavLink
        to="/courses/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-solid fa-graduation-cap fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          courses
        </span>
      </NavLink>
      <NavLink
        to="/friends/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-regular fa-circle-user fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          friends
        </span>
      </NavLink>
      <NavLink
        to="/files/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-regular fa-file fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          files
        </span>
      </NavLink>
      <NavLink
        to="/plans/"
        className="d-flex p-2 my-2   fw-bold ms-0  ms-md-1 justify-content-around w-100 align-items-center text-decoration-none"
      >
        <i className="fa-regular fa-credit-card fa-fw"></i>
        <span className="text-capitalize flex-grow-1 ms-3 d-none d-md-block ">
          plans
        </span>
      </NavLink>
    </nav>
  );
}

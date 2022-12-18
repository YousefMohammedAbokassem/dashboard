import React from "react";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import "./files.css";
import Statistics from "./Statistics";
import Boxes from "./Boxes/Boxes";
import { useEffect } from "react";
export default function Files() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Files";
  }, []);
  return (
    <div
      className="files container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Files" />
      <div className="row flex-row-reverse p-1 p-md-3  mt-5">
        <Statistics />
        <Boxes />
      </div>
    </div>
  );
}

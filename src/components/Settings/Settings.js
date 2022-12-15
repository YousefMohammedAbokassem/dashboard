import React from "react";
import { useEffect } from "react";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import "./settings.css";
import Control from "./SmallCompOfSettings/control/Control";
import Info from "./SmallCompOfSettings/Info/Info";
import Security from "./SmallCompOfSettings/Security ";
import Social from "./SmallCompOfSettings/Social";
import Widgets from "./SmallCompOfSettings/wedgets/Widgets";
export default function Settings() {
  useEffect(() => {
       let title = document.getElementById("titlePage");
       title.innerHTML = "Settings";
  }, []);
  return (
    <div
      className="settings container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Settings" />
      <div className="row p-md-3 p-1  mt-5">
        <Control />
        <Info />
        <Security />
        <Social />
        <Widgets />
      </div>
    </div>
  );
}

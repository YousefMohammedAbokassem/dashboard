import React, { useEffect } from "react";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import "./profile.css";
import Activities from "./smallCompForProfile/Activities/Activities";
import Skills from "./smallCompForProfile/Skills/Skills";
import SmallProfile from "./smallCompForProfile/smallProfile/SmallProfile";

export default function Profile() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Profile";
  }, []);
  return (
    <div
      className="profile container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="profile" />
      <div className="row p-1 p-md-3  mt-5">
        <SmallProfile />
        <Skills />
        <Activities />
      </div>
    </div>
  );
}

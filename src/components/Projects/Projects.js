import React, { useEffect } from "react";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import Project from "./Project";
import "./project.scss";
export default function Projects() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Projects";
  }, []);
  return (
    <div
      className="projects container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Projects" />
      <div className="row p-1 p-md-3  mt-5">
        <div className="container">
          <Project
            h6="Yousef Dashboard"
            p="Yousef Dashboard Project Design And Programming And Hosting"
            span1="Programming"
            span2="Design"
            span3="Hosting"
            span4="Marketing"
            date="15/10/2021"
            price="2500"
            wid="50%"
          />
          <Project
            h6="Academy Portal"
            p="Academy Portal Project Design And Programming"
            span1="Programming"
            span2="Design"
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="1800"
            wid="75%"
          />
          <Project
            h6="Chatting Application"
            p="Chatting Application Project Design"
            span1="Design"
            // span2=""
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="950"
            wid="100%"
          />
          <Project
            h6="Ahmed Dashboard"
            p="Ahmed Dashboard Project Design And Programming And Hosting"
            span1="Programming"
            span2="Design"
            span3="Hosting"
            span4="Marketing"
            date="15/6/2022"
            price="1700"
            wid="60%"
          />
          <Project
            h6="Ahmed Portal"
            p="Ahmed Portal Project Design And Programming"
            span1="Programming"
            span2="Design"
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="850"
            wid="75%"
          />
          <Project
            h6="Mohamed Application"
            p="Mohamed Application Project Design"
            span1="Design"
            // span2=""
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="950"
            wid="40%"
          />
          <Project
            h6="Mohamed Dashboard"
            p="Mohamed Dashboard Project Design And Programming And Hosting"
            span1="Programming"
            span2="Design"
            span3="Hosting"
            span4="Marketing"
            date="15/6/2022"
            price="1950"
            wid="75%"
          />
          <Project
            h6="Mohamed Portal"
            p="Mohamed Portal Project Design And Programming"
            span1="Programming"
            span2="Design"
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="1650"
            wid="75%"
          />
          <Project
            h6="Ahmed Application"
            p="Ahmed Application Project Design"
            // span1=""
            span2="Design"
            // span3="Hosting"
            // span4="Marketing"
            date="15/6/2022"
            price="950"
            wid="90%"
          />
        </div>
      </div>
    </div>
  );
}

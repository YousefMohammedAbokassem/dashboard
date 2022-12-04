import React from "react";
import Title from "../Title/Title";
import NewPart from "./NewPart";

export default function News() {
  return (
    <div
      className="col-xl-6 my-3 h-auto wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="news h-100 p-3 ">
        <Title main="Latests News" />
        <NewPart
          img="/dashboard/images/news-01.png"
          main="Created SASS Section"
          second="New SASS Examples & Tutorials"
          Span="3"
        />
        <NewPart
          img="/dashboard/images/news-02.png"
          main="Changed The Design"
          second="A Brand New Website Design"
          Span="5"
        />
        <NewPart
          img="/dashboard/images/news-03.png"
          main="Team Increased"
          second="3 Developers Joined The Team"
          Span="7"
        />
        <NewPart
          img="/dashboard/images/news-04.png"
          main="Added Payment Gateway"
          second="Many New Payment Gateways Added"
          Span="9"
        />
      </div>
    </div>
  );
}

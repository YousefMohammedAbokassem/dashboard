import React from "react";
import Title from "../../TitleSettings/TitleSettings";
import Lables from "./Lables";

export default function Widgets() {
  return (
    <div
      className="col-xxl-6  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="widget p-3 h-100">
        <Title main="Widgets Control" name="Show/Hide Widgets" />
        <ul className="list-unstyled d-flex flex-column ">
          <Lables main="Quick Draft" />
          <Lables main="Yearly Targets" />
          <Lables main="Tickets Statistics" />
          <Lables main="Latest News" />
          <Lables main="Latest Tasks" />
          <Lables main="op Search Items" />
        </ul>
      </div>
    </div>
  );
}

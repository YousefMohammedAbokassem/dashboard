import React from "react";
import Title from "../../../Settings/TitleSettings/TitleSettings";

export default function Activities() {
  return (
    <div
      className="col-md-7 col-12  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="activities radius px-3 py-4 h-100">
        <Title
          main="Latest Activities"
          name="Latest Activities Done By The User"
        />
        <div className="types">
          <div className="imageAndInfo">
            <img src="/dashboard/images/activity-02.png" alt="" />
            <div className="info">
              <span>Store</span>
              <p className="opacity-75">Bought The Mastering Python Course</p>
            </div>
          </div>
          <div className="date">
            <span>18:10</span>
            <span className="opacity-75">Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
}

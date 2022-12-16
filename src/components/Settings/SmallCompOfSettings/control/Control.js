import React from "react";
import Toggle from "../../../Toggle/Toggle";
import TitleSettings from "../../TitleSettings/TitleSettings";

export default function Control() {
  return (
    <div
      className="col-xxl-6  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="control p-3 h-100">
        <div className="title">
          <TitleSettings
            main="Site Control"
            name="Control The Website If There Is Maintenance"
          />
        </div>
        <div className="status d-flex flex-column flex-md-row text-center text-md-start  justify-content-evenly  justify-content-md-between align-items-center">
          <TitleSettings
            main="Website Control"
            name="Open/Close Website And Type The Reason"
          />
          <Toggle />
        </div>
        <textarea
          className="mt-2"
          placeholder="Close Message Content"
        ></textarea>
      </div>
    </div>
  );
}

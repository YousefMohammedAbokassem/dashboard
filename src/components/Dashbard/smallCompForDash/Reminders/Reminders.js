import React from "react";
import { useEffect } from "react";
import Title from "../Title/Title";
import RemindersChild from "./RemindersChild";

export default function Reminders() {
  useEffect(() => {}, []);
  return (
    <div
      className="col-xl-6 col-xxl-4 my-3 h-auto wow animate__slideInRight"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="reminders h-100 p-3 d-flex flex-column justify-content-evenly">
        <Title main="Reminders" />
        <RemindersChild
          main="RemindersInfo ms-5 my-3 position-relative"
          h6="Check My Tasks List"
          date="28/09/2022 - 12:00am"
          spanClass="position-absolute bg-blue"
        />
        <RemindersChild
          main="RemindersInfo ms-5 my-3 position-relative"
          h6="Check My Tasks List"
          date="28/09/2022 - 12:00am"
          spanClass="position-absolute bg-green"
        />{" "}
        <RemindersChild
          main="RemindersInfo ms-5 my-3 position-relative"
          h6="Check My Tasks List"
          date="28/09/2022 - 12:00am"
          spanClass="position-absolute bg-orange"
        />
        <RemindersChild
          main="RemindersInfo ms-5 my-3 position-relative"
          h6="Check My Tasks List"
          date="28/09/2022 - 12:00am"
          spanClass="position-absolute bg-red"
        />
      </div>
    </div>
  );
}

import React from "react";
import Act from "./Act";
import Title from "../../../Settings/TitleSettings/TitleSettings";

export default function Activities() {
  return (
    <div
      className="col-lg-7 col-12  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="activities radius px-3 py-4 h-100">
        <Title
          main="Latest Activities"
          name="Latest Activities Done By The User"
        />
        <Act
          type="Store"
          para="Bought The Mastering Python Course"
          date1="18:10"
          date2="Yesterday"
          imageSrc="/dashboard/images/activity-01.png"
        />
        <Act
          type="Academy"
          para="Got The PHP Certificate"
          date1="16:05"
          date2="Yesterday"
          imageSrc="/dashboard/images/activity-02.png"
        />
        <Act
          type="Badges"
          para="Unlocked The 10 Skills Badge"
          date1="18:05"
          date2="two days ago"
          imageSrc="/dashboard/images/activity-03.png"
        />
        <Act
          type="Store"
          para="Bought The Typescript Course"
          date1="12:05"
          date2="three days ago"
          imageSrc="/dashboard/images/activity-01.png"
        />
      </div>
    </div>
  );
}

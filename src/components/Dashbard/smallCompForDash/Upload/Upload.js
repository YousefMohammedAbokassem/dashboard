import React from "react";
import Title from "../Title/Title";
import UploadChild from "./UploadChild";

export default function Upload() {
  return (
    <div
      className="col-xl-6 col-xxl-4 my-3 h-auto wow animate__slideInRight"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="upload p-3 h-100">
        <Title main="Latest Uploads" />
        <UploadChild />
      </div>
    </div>
  );
}

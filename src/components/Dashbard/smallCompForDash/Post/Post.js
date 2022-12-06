import React from "react";
import Title from "../../smallCompForDash/Title/Title";
export default function Post() {
  return (
    <div
      className="col-xl-6 col-xxl-4 Post h-auto my-3 wow animate__slideInLeft"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="post p-3 h-100">
        <Title main="Latest Post" />
        <div className="postInfo d-flex align-items-center pb-3">
          <img
            className="me-2"
            src="/dashboard/images/activity-02.png"
            alt=""
          />
          <div className="name">
            <h6 className="text-capitalize">yousef abo kassem</h6>
            <h6 className="text-capitalize opacity-75">About 3 Hours Ago</h6>
          </div>
        </div>
        <p className="py-4 text-center text-md-start">
          You Can Fool All Of The People Some Of The Time, And Some Of The
          People All Of The Time, But You Can't Fool All Of The People All Of
          The Time.
        </p>
        <div className="foot d-flex justify-content-between align-items-center">
          <span className="opacity-75">
            <i className="fa-regular fa-heart"></i>
            1.8K
          </span>
          <span className="opacity-75">
            <i className="fa-regular fa-comments"></i>
            500
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Info from "./Info";

export default function SmallProfile() {
  return (
    <div
      className="col-12 my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="smallProfile radius px-3 py-4 h-100 d-flex flex-lg-row flex-column">
        <div className="image">
          <img src="/dashboard/images/activity-02.png" alt="" />
          <h5>Yousef Abo Kassem</h5>
          <h6 className="opacity-75">Level 10</h6>
          <div className="progress myPro my-1"></div>
          <div className="rating my-2">
            <i className="fa-solid fa-star c-orange"></i>
            <i className="fa-solid fa-star c-orange"></i>
            <i className="fa-solid fa-star c-orange"></i>
            <i className="fa-solid fa-star c-orange"></i>
            <i className="fa-solid fa-star c-orange"></i>
          </div>
          <span className="opacity-50">550 Rating</span>
        </div>

        <div className="infoContainer flex-grow-1">
          <Info
            Title="General Information"
            First="Full Name :"
            firstName="Osama Mohamed"
            second="Gender :"
            secondName="male"
            third="Country :"
            thirdName="Palestine"
          />
          <Info
            Title="Personal Information"
            First="Email :"
            firstName="o@nn.sa"
            second="Phone :"
            secondName="019123456789"
            third="Date Of Birth :"
            thirdName="25/10/1982"
          />
          <Info
            Title="Job Information"
            First="Title :"
            firstName="Full Stack Developer"
            second="Programming Language :"
            secondName="Python"
            third="Years Of Experience :"
            thirdName="15+"
          />
          <Info
            Title="Billing Information"
            First="Payment Method :"
            firstName="Paypal"
            second="Email :"
            secondName="email@website.com"
            third="Subscription :"
            thirdName="Monthly"
          />
        </div>
      </div>
    </div>
  );
}

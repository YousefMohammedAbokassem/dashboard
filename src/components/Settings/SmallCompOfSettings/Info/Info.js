import React from "react";
import Title from "../../TitleSettings/TitleSettings";
export default function Info() {
  return (
    <div
      className="col-xxl-6   wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="info p-3 h-100">
        <Title
          main="General Info"
          name="General Information About Your Account"
        />

        <form  className="information's d-flex flex-column">
          <div className="box">
            <div className="opacity-75">First Name</div>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="box">
            <div className="opacity-75">Last Name</div>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="box ">
            <div className="opacity-75">Last Name</div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <input type="email" placeholder="o@nn.sa" disabled />
              <input className="ms-0 ms-md-3" type="submit" value="Change" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

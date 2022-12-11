import React from "react";
import TitleSettings from "../TitleSettings/TitleSettings";
import Toggle from "../../Toggle/Toggle";
export default function Security() {
  return (
    <div
      className="col-xxl-6   wow animate__slideInRight "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="security p-3 h-100">
        <TitleSettings
          main="Security Info"
          name="Security Information About Your Account"
        />
        <div className="secureInfo">
          <div className="box d-flex align-items-center justify-content-between flex-column flex-md-row text-center text-md-start password ">
            <div>
              <h5>Password</h5>
              <h6 className=" opacity-75">Last Change On 25/10/2021</h6>
            </div>
            <a className="bg-eee text-dark" href="#">
              Change
            </a>
          </div>
          <div className="box d-flex my-2 flex-column flex-md-row text-center text-md-start  align-items-center justify-content-between Factor  ">
            <div>
              <h5>Two-Factor Authentication</h5>
              <h6 className=" opacity-75">Enable/Disable The Feature</h6>
            </div>
            <Toggle />
          </div>
          <div className="box my-3 flex-column flex-md-row text-center text-md-start d-flex align-items-center justify-content-between Toggle">
            <div>
              <h5>Devices</h5>
              <h6 className=" opacity-75">Check The Login Devices List</h6>
            </div>
            <a className="bg-blue text-white" href="#">
              Devices
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

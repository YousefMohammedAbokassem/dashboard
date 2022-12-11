import React from "react";
import Title from "../TitleSettings/TitleSettings";

export default function Social() {
  return (
    <div
      className="col-xxl-6  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="social p-3 h-100">
        <Title main="Social Info" name="Social Media Information" />
        <form action="">
          {/* box */}
          <div className="box d-flex justify-content-center align-items-center">
            <div className="icon h-100">
              <i className="fa-brands fa-twitter fa-2"></i>
            </div>
            <input className="h-100" type="text" placeholder="Twitter Username" />
          </div>
          {/* box */}
          <div className="box d-flex justify-content-center align-items-center">
            <div className="icon h-100">
              <i className="fa-brands fa-facebook-f fa-2"></i>
            </div>
            <input className="h-100" type="text" placeholder="Facebook Username" />
          </div>
          <div className="box d-flex justify-content-center align-items-center">
            <div className="icon h-100">
              <i className="fa-brands fa-linkedin fa-2"></i>
            </div>
            <input className="h-100" type="text" placeholder=" Linkedin Username" />
          </div>
          <div className="box d-flex justify-content-center align-items-center">
            <div className="icon h-100">
              <i className="fa-brands fa-youtube fa-2"></i>
            </div>
            <input className="h-100" type="text" placeholder="Youtube Username" />
          </div>
        </form>
      </div>
    </div>
  );
}

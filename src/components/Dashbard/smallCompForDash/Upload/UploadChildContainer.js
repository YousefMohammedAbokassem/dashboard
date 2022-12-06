import React from "react";

export default function UploadChildContainer({main,name,size,address}) {
  return (
    <div className="uploadChild py-2 d-flex align-items-center justify-content-between">
      <div className="info d-flex align-items-center jus">
        <img className="" src={address} alt="" />
        <div className=" ms-2 details">
          <h6 className="m-0">{main}</h6>
          <h6 className="opacity-50 m-0">{name}</h6>
        </div>
      </div>
      <span className="px-2 py-1">{size}</span>
    </div>
  );
}

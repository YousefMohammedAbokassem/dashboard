import React from "react";

export default function act({ type, para, date1, date2 ,imageSrc}) {
  return (
    <div className="types  py-3 d-flex justify-content-between align-items-center flex-column flex-lg-row">
      <div className="imageAndInfo d-flex align-items-center justify-content-between flex-column flex-lg-row">
        <img src={imageSrc} alt="" />
        <div className="info ms-lg-2 ms-0 my-lg-3 my-3 d-flex flex-column align-items-center align-items-lg-start align-items-center">
          <span>{type}</span>
          <p className="opacity-75 m-0 mt-lg-1 mt-1">{para}</p>
        </div>
      </div>
      <div className="date d-flex flex-column align-items-center">
        <span>{date1}</span>
        <span className="opacity-75 mt-lg-1 mt-1">{date2}</span>
      </div>
    </div>
  );
}

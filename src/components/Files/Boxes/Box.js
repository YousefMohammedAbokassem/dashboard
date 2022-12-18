import React from "react";

export default function Box({ image, type, date, size,name }) {
  return (
    <div className="box radius p-2 d-flex flex-column justify-content-between">
      <i className="fa-solid fa-download c-grey p-absolute"></i>
      <div className="imageAndText d-flex flex-column align-items-center">
        <img className="imageType" src={image} alt="" />
        <span className="mt-1">{type}</span>
      </div>
      <span className="opacity-75">{name}</span>
      <footer className="d-flex justify-content-between pt-2">
        <span className="opacity-75">{date}</span>
        <span className="opacity-75">{size}MB</span>
      </footer>
    </div>
  );
}

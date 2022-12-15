import React from "react";
import Tilty from "react-tilty";
export default function CoursesParts({ sourceImg, h4, p, members, price }) {
  return (
    <Tilty
      speed={1000}
      glare={true}
      maxGlare={1}
      reverse
      perspective={1000}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card radius" style={{ transform: "translateZ(30px)" }}>
        <img
          //   {sourceImg}
          src={sourceImg}
          className="card-img-top h-75"
          alt="..."
        />
        <div className="card-body p-3">
          <h4 className="card-text">{h4}</h4>
          <p className="card-text py-3 my-3">{p}</p>
        </div>
        <div className="footCard p-3 pt-0 d-flex justify-content-between align-content-center">
          <div className="members">
            <i className="fa-regular fa-user"></i>
            <span className="ms-1">{members}</span>
          </div>
          <div className="courseInfo" style={{ transform: "translateZ(30px)" }}>
            Course Info
          </div>
          $ {price}
        </div>
      </div>
    </Tilty>
  );
}

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FriendsPart({
  h4,
  p,
  friend,
  project,
  article,
  date,
  imgNum,
}) {
  useEffect(() => {
    const removeFriendBtn = document.querySelectorAll(".removeFriendBtn");
    const removeFriend = document.querySelectorAll(".removeFriend");
    removeFriendBtn.forEach((ele, i) => {
      ele.addEventListener("click", () => {
        removeFriend[i].remove();
      });
    });
  }, []);
  return (
    <div
      className="col-xl-4 col-lg-6 my-3 wow animate__slideInLeft removeFriend"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="box position-relative p-3 h-100 radius-6">
        <div className="icons position-absolute">
          <i className="fa-solid fa-phone me-1"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="textAndImage d-flex flex-column justify-content-between align-items-center">
          <img className="my-2" src={imgNum} alt="..." />
          <h4 className="m-0">{h4}</h4>
          <p className="m-0 opacity-75 mt-1">{p}</p>
        </div>
        {/* 2 */}
        <div className="info py-3 my-2">
          <div className="">
            <i className="fa-regular fa-face-smile fa-fw"></i>
            <span className="ms-4">{friend}</span>
          </div>
          <div className="my-1">
            <i className="fa-solid fa-code-commit fa-fw"></i>
            <span className="ms-4"> {project}</span>
          </div>
          <div>
            <i className="fa-regular fa-newspaper fa-fw"></i>
            <span className="ms-4">{article}</span>
          </div>
        </div>
        <div className="foot d-flex justify-content-between align-items-center">
          <span className="date">{date}</span>
          <div className="links d-flex">
            <Link
              className="bg-blue mx-1 h-100 text-white  radius-6"
              to="/profile/"
            >
              Profile
            </Link>
            <button className="bg-red h-100 text-white radius-6 removeFriendBtn">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

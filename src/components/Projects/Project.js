import React from "react";
import { useEffect } from "react";

export default function Project({
  h6,
  p,
  span1,
  span2,
  span3,
  span4,
  date,
  price,
  wid,
}) {
  useEffect(() => {
    const mySpanSkill = document.querySelectorAll(".mySpanSkill"),
      mySpanProgress = document.querySelectorAll(".progressPrice >span");
    // to remove the empty spans
    mySpanSkill.forEach((span) => {
      if (span.innerHTML == "") {
        span.remove();
      }
    });
    mySpanProgress.forEach(function (el) {
      let goal = el.dataset.width;
      el.style.width = goal;
      if (parseInt(goal) < 50) {
        el.style.background = "var(--red-color)";
      } else if (parseInt(goal) >= 50 && parseInt(goal) <= 99) {
        el.style.background = "var(--green-color)";
      } else if (parseInt(goal) == 100) {
        el.style.background = "var(--blue-color)";
      }
    });
  }, []);
  return (
    <div className="project p-3 radius">
      <div className="infoAndDate">
        <div className="info d-flex justify-content-between">
          <div className="hAndP">
            <h6>{h6}</h6>
            <p className="opacity-75">{p}</p>
          </div>
          <span>{date}</span>
        </div>
        <div className="images">
          <img src="/dashboard/images/activity-01.png" alt="" />
          <img src="/dashboard/images/activity-01.png" alt="" />
          <img src="/dashboard/images/activity-01.png" alt="" />
          <img src="/dashboard/images/activity-01.png" alt="" />
        </div>
      </div>

      {/* end */}
      <div className="skills my-2 d-flex flex-column flex-md-row justify-content-end py-3">
        <span className="p-1 mt-md-0 mt-1 bg-eee text-black text-capitalize ms-2 radius-6 mySpanSkill">
          {span1}
        </span>
        <span className="p-1 mt-md-0 mt-1 bg-eee text-black text-capitalize ms-2 radius-6 mySpanSkill">
          {span2}
        </span>
        <span className="p-1 mt-md-0 mt-1 bg-eee text-black text-capitalize ms-2 radius-6 mySpanSkill">
          {span3}
        </span>
        <span className="p-1 mt-md-0 mt-1 bg-eee text-black text-capitalize ms-2 radius-6 mySpanSkill">
          {span4}
        </span>
      </div>
      {/* end */}
      <div className="price d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="progress progressPrice w-50 position-relative">
          <span className="radius-6" data-width={wid}></span>
        </div>
        <span className="opacity-75 mt-2 mt-md-0 ">$ {price}</span>
      </div>
      {/* end */}
    </div>
  );
}

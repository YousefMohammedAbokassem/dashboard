import React, { useEffect } from "react";
import "./progress.css";
export default function Progress({
  icon,
  title,
  number,
  width,
  TheClass,
  IconParentClass,
  progress,
  spans,
}) {
  useEffect(() => {
    const targets = document.querySelector(".targets");
    const Spans = document.querySelectorAll(".details .progres > span ");
    // let status = true;
    // const childSpans = document.querySelectorAll(
    //   ".details .progres > span >span "
    // );
    // let counte = 0;
    window.addEventListener("scroll", function () {
      if (
        window.scrollY >=
        targets.offsetTop + targets.offsetHeight - window.innerHeight
      ) {
        // progress
        Spans.forEach((span) => {
          span.style.width = `${span.dataset.width}%`;
        });
        // counter
        // if (status == true) {
        //   childSpans.forEach((child) => {
        //     let goal = child.dataset.width;
        //     child.innerHTML = 0;
        //     let counter = setInterval(() => {
        //       child.textContent++;
        //       if (child.innerHTML >= goal) {
        //         clearInterval(counter);
        //         child.innerHTML = goal;
        //       }
        //     },1000);
        //     status = !status;
        //   });
        // }
      } else {
        // progress
        Spans.forEach((span) => {
          span.style.width = "0";
          // counter
        });
      }
    });
  }, []);
  return (
    <div className={TheClass}>
      {/* for Icon */}
      <div className={IconParentClass}>
        <i className={icon}></i>
      </div>
      {/* for Progress */}
      <div className="details">
        <span>{title}</span>
        <h5 className="my-2">{number}</h5>
        {/* bold */}
        <div className={progress}>
          .div
          {/* opacity */}
          <span data-width={width} className={spans}>
            <span className={spans} data-width={width}>
              {width}%
            </span>
          </span>
          {/* the value */}
        </div>
      </div>
    </div>
  );
}

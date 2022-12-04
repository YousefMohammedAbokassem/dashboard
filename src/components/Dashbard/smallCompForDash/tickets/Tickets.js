import React, { useEffect } from "react";
import Title from "../Title/Title";

export default function Tickets() {
  // useEffect(() => {
  //   const ticket = document.querySelector(".tickets");
  //   const TheNumbers = document.querySelectorAll(".tickets section >div >h3");
  //   let status = true;
  //   window.addEventListener("scroll", function () {
  //     if (
  //       window.scrollY >=
  //       ticket.offsetTop + ticket.offsetHeight - window.innerHeight
  //     ) {
  //       if (status === true) {
  //         TheNumbers.forEach((span) => {
  //           let goal = span.dataset.point;
  //           console.log(goal);
  //           span.innerHTML = 0;
  //           let counter = this.setInterval(() => {
  //             span.textContent++;
  //             console.log(span.textContent);
  //             if (span.textContent == goal) {
  //               this.clearInterval(counter);
  //             }
  //           }, 10);
  //         });
  //         status = !status;
  //       }
  //     } else {
  //       console.log("object");
  //     }
  //   });
  // }, []);
  return (
    <div
      className="col-xl-6 h-auto my-3 wow animate__slideInRight"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="tickets h-100 p-3">
        <Title
          main="Tickets Statistics"
          name="Everything About Support Tickets"
        />
        <section className="">
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
            <h3 data-point="2500">2500</h3>
            <span className="opacity-75">Total</span>
          </div>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
            <h3 data-point="500">500</h3>
            <span className="opacity-75">Pending</span>
          </div>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
            <h3 data-point="1900">1900</h3>
            <span className="opacity-75">Closed</span>
          </div>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
            <h3 data-point="100">100</h3>
            <span className="opacity-75">Deleted</span>
          </div>
        </section>
      </div>
    </div>
  );
}

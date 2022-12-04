import React, { useEffect } from "react";
import "./go.css";

export default function Go() {
  useEffect(() => {
    const go = document.querySelector(".go");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        go.style.cssText = "bottom: 30px; opacity:1;";
      } else {
        go.style.cssText = "bottom: 0; opacity:0;";
      }
    });
  }, []);
  const goUp = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  return (
    <div className="go" onClick={goUp}>
      <i className="fas fa-caret-square-up myButton"></i>
    </div>
  );
}

import React from "react";

export default function RemindersChild({main, h6, date, spanClass}) {
  return (
    <div className={main}>
      <h6>{h6}</h6>
      <span className="opacity-75">{date}</span>
      <span className={spanClass}></span>
    </div>
  );
}

import React from "react";

export default function SearchChild({ job, num }) {
  return (
    <div className=" mt-4 d-flex justify-content-between align-items-center">
      <span>{job}</span>
      <span className="ItemsNum" >{num}</span>
    </div>
  );
}

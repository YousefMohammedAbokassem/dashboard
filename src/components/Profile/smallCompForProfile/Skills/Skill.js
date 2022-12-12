import React from "react";

export default function Skill({ skill }) {
  return (
    <span className="skillSpan bg-eee px-2 py-1 radius-6 text-black fw-bold">
      {skill}
    </span>
  );
}

import React from "react";

export default function FooterChild({
  one,
  two,
  three,
  four,
  five,
  spanClass,
}) {
  return (
    <tr>
      <td>{one}</td>
      <td>{two}</td>
      <td>{three}</td>
      <td> {four}</td>
      <td className="image">
        <img src="/dashboard/images/activity-02.png" alt="" />
        <img src="/dashboard/images/activity-02.png" alt="" />
        <img src="/dashboard/images/activity-02.png" alt="" />
        <img src="/dashboard/images/activity-02.png" alt="" />
      </td>
      <td>
        <span className={spanClass}>{five}</span>
      </td>
    </tr>
  );
}

import React from "react";

export default function FooterChild({ one, two, three, four, five,spanClass }) {
  return (
    <tr>
      <td>{one}</td> <td>{two}</td> <td>{three}</td> <td> {four}</td>
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
// <tr>
//   <td>Ministry Wikipedia</td> <td>10 May 2022</td> <td>Ministry</td>{" "}
//   <td> $5300</td>
//   <td className="image">
//     <img src="/dashboard/images/activity-02.png" alt="" />
//     <img src="/dashboard/images/activity-02.png" alt="" />
//     <img src="/dashboard/images/activity-02.png" alt="" />
//     <img src="/dashboard/images/activity-02.png" alt="" />
//   </td>
//   <td>
//     <span className="bg-orange text-white px-2 py-1 rad-6">Pending</span>
//   </td>
// </tr>;

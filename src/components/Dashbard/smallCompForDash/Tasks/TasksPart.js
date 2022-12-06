import React, { useEffect } from "react";
import Title from "../Title/Title";

export default function TasksPart({ main, second ,theClass}) {
  useEffect(() => {}, []);
  const Delete = (e) => {
    const children = document.querySelectorAll(".tasks >.Child");
    const end = document.querySelector(".parentTasks");
    // remove the target
    let parent = e.target.parentElement;
    parent.remove();
    // for remove the whole component after delete all children
    if (children.length == 1) {
      end.remove();
    }
  };
  return (
    <div className={theClass}>
      <div className="info">
        <h5 className="my-1">{main}</h5>
        <h5 className="opacity-50 my-1">{second}</h5>
      </div>
      <i className="fa-regular fa-trash-can delete" onClick={Delete}></i>
    </div>
  );
}

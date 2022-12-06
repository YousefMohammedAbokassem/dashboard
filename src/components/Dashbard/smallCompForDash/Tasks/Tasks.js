import React from "react";
import Title from "../Title/Title";
import TasksPart from "./TasksPart";

export default function Tasks() {
  return (
    <div
      className="col-xl-6 col-xxl-4 h-auto  my-3 wow animate__slideInRight parentTasks"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="tasks p-3 h-100">
        <Title main="Latest Tasks" />
        <TasksPart
          main="Record One New Video"
          second="Record Python Create Exe Project"
          theClass="Child pb-2 my-2 d-flex align-items-center justify-content-between"
        />
        <TasksPart
          main="Write Article"
          second="Write Low Level vs High Level Languages"
          theClass="Child pb-2 my-2 d-flex align-items-center justify-content-between"
        />
        <TasksPart
          main="Finish Project"
          second="Publish Academy Programming Project"
          theClass="Child childFinish pb-2 my-2 d-flex align-items-center justify-content-between"
        />
        <TasksPart
          main="Attend The Meeting"
          second="Attend The Project Business Analysis Meeting"
          theClass="Child childAttend pb-2 my-2 d-flex align-items-center justify-content-between"
        />
        <TasksPart
          main="Finish Lesson"
          second="Finish Teaching Flex Box"
          theClass="Child pb-2 my-2 d-flex align-items-center justify-content-between"
        />
      </div>
    </div>
  );
}

import React from "react";
import Title from "../../../Settings/TitleSettings/TitleSettings";
import Toggle from "../../../Toggle/Toggle";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div
      className="col-md-5 col-12  my-3 wow animate__slideInLeft "
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="skills radius px-3 py-4 h-100">
        <Title main="My Skills" name="Complete Skills List" />
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="HTML" />
          <Skill skill="Pugjs" />
          <Skill skill="HAML" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="CSS" />
          <Skill skill="SASS" />
          <Skill skill="Stylus" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="JavaScript" />
          <Skill skill="TypeScript" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="Vuejs" />
          <Skill skill="Reactjs" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="Jest" />
          <Skill skill="Jasmine" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="PHP" />
          <Skill skill="Laravel" />
        </div>
        <div className="skill py-2 d-flex justify-content-md-between justify-content-center align-content-center flex-md-wrap">
          <Skill skill="Python" />
          <Skill skill="Django" />
        </div>
      </div>
    </div>
  );
}

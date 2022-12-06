import React from "react";
import Title from "../Title/Title";
import SocialChild from "./SocialChild";

export default function Social() {
  return (
    <div
      className="col-xl-6 col-xxl-4 my-3 h-auto wow animate__slideInRight"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="social h-100 p-3 d-flex flex-column justify-content-between">
        <Title main="Social Media Stats" />
        <SocialChild
          icon="fa-brands fa-twitter fa-2x"
          Span="90K Followers"
          Button="Follow"
        />
        <SocialChild
          icon="fa-brands fa-facebook-f fa-2x"
          Span="2M Like"
          Button="Like"
        />
        <SocialChild
          icon="fa-brands fa-youtube fa-2x"
          Span="1M Subs"
          Button="Subscribe"
        />
        <SocialChild
          icon="fa-brands fa-linkedin fa-2x"
          Span="70K Followers"
          Button="Follow"
        />
      </div>
    </div>
  );
}

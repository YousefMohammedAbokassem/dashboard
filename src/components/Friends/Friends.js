import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import "./friends.scss";
import FriendsPart from "./FriendsPart";
export default function Friends() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Friends";
  }, []);
  return (
    <div
      className="friends container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Friends" />
      <div className="row p-1 p-md-3  mt-5">
        <FriendsPart
          h4="Ahmed Nasse"
          p="JavaScript Developer"
          friend="99 Friend"
          project="15 Projects"
          article="25 Articles"
          date="Joined 02/10/2021"
          imgNum="/dashboard/images/friend-01.jpg"
        />
        <FriendsPart
          h4="Omar Fathy"
          p="Cloud Developer"
          friend="30 Friends"
          project="11 Projects"
          article="12 Articles"
          date="Joined 02/08/2020"
          imgNum="/dashboard/images/friend-02.jpg"
        />
        <FriendsPart
          h4="Omar Ahmed"
          p="Mobile Developer"
          friend="80 Friends"
          project="20 Projects"
          article="18 Articles"
          date="Joined 02/06/2020"
          imgNum="/dashboard/images/friend-03.jpg"
        />
        <FriendsPart
          h4="Shady Nabil"
          p="Back-End Developer"
          friend="70 Friends"
          project="30 Projects"
          article="18 Articles"
          date="Joined 28/06/2020"
          imgNum="/dashboard/images/friend-04.jpg"
        />
        <FriendsPart
          h4="Mohamed Ibrahim"
          p="Algorithm Developer"
          friend="80 Friends"
          project="30 Projects"
          article="18 Articles"
          date="Joined 28/08/2020"
          imgNum="/dashboard/images/friend-05.jpg"
        />
        <FriendsPart
          h4="Amr Hendawy"
          p="Back-End Developer"
          friend="70 Friends"
          project="30 Projects"
          article="18 Articles"
          date="Joined 28/06/2020"
          imgNum="/dashboard/images/friend-04.jpg"
        />
        <FriendsPart
          h4="Mahmoud Adel"
          p="Cloud Developer"
          friend="30 Friends"
          project="11 Projects"
          article="12 Articles"
          date="Joined 02/08/2020"
          imgNum="/dashboard/images/friend-02.jpg"
        />
        <FriendsPart
          h4="Ahmed Abuzaid"
          p="Content Creator"
          friend="80 Friends"
          project="30 Projects"
          article="18 Articles"
          date="Joined 28/08/2020"
          imgNum="/dashboard/images/friend-05.jpg"
        />
        <FriendsPart
          h4="Gareeb Elshiekh"
          p="JavaScript Developer"
          friend="90 Friends"
          project="15 Projects"
          article="25 Articles"
          date="Joined 02/10/2020"
          imgNum="/dashboard/images/friend-05.jpg"
        />
        <FriendsPart
          h4="Hamza"
          p="Front-End Developer"
          friend="80 Friends"
          project="20 Projects"
          article="18 Articles"
          date="Joined 02/06/2020"
          imgNum="/dashboard/images/friend-03.jpg"
        />
        <FriendsPart
          h4="Yousef Abokassem"
          p="Front-End Developer"
          friend="80 Friends"
          project="20 Projects"
          article="18 Articles"
          date="Joined 02/06/2020"
          imgNum="/dashboard/images/friend-05.jpg"
        />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Page from "../Dashbard/smallCompForDash/Page/Page";
import "./coursera.scss";
import CoursesParts from "./CoursesParts";
export default function Coursera() {
  useEffect(() => {
    let title = document.getElementById("titlePage");
    title.innerHTML = "Courses";
  }, []);
  return (
    <div
      className="courses container-fluid p-md-4 p-1 wow animate__fadeIn"
      data-wow-duration="4s"
    >
      <Page page="Courses" />
      <div className="row p-1 p-md-3  mt-5">
        <div className="container">
          <CoursesParts
            sourceImg="/dashboard/images/course-01.jpg"
            h4="Mastering Web Design"
            p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
            members="950"
            price="165"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-02.jpg"
            h4="Data Structure And Algorithms"
            p="Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering"
            members="1150"
            price="210"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-03.jpg"
            h4="Responsive Web Design"
            p="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
            members="650"
            price="90"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-04.jpg"
            h4="Mastering Python"
            p="Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"
            members="950"
            price="250"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-05.jpg"
            h4="PHP Examples"
            p="PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases"
            members="850"
            price="150"
          />
            <CoursesParts
            sourceImg="/dashboard/images/course-02.jpg"
            h4="Data Structure And Algorithms"
            p="Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering"
            members="1150"
            price="210"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-03.jpg"
            h4="Responsive Web Design"
            p="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
            members="650"
            price="90"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-01.jpg"
            h4="Mastering Web Design"
            p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
            members="950"
            price="165"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-05.jpg"
            h4="PHP Examples"
            p="PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases"
            members="850"
            price="150"
          />
          <CoursesParts
            sourceImg="/dashboard/images/course-04.jpg"
            h4="Mastering Python"
            p="Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"
            members="950"
            price="250"
          />
        </div>
      </div>
    </div>
  );
}

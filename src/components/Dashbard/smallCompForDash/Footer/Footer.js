import React from "react";
import Title from "../Title/Title";
import FooterChild from "./FooterChild";

export default function Footer() {
  return (
    <footer
      className="p-3 wow animate__fadeInUpBig"
      data-wow-duration="1s"
      //   data-wow-offset="200"
    >
      <div>
        <Title main="Projects" />
        <table className="w-100">
          <thead className="bg-eee c-black">
            <tr>
              <th>Name</th>
              <th>Finish Date</th>
              <th>Client</th>
              <th>Price</th>
              <th>Team</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <FooterChild
              one="Ministry Wikipedia"
              two="10 May 2022"
              three="Ministry"
              four="$5300"
              five="Pending"
              spanClass="bg-orange text-white px-2 py-1"
            />
            <FooterChild
              one="Elzero Shop"
              two="12 Oct 2021"
              three="Elzero Company"
              four="$1500"
              five="In Progress"
              spanClass="bg-blue text-white px-2 py-1"
            />
            <FooterChild
              one="Bouba App"
              two="05 Sep 2021"
              three="Bouba"
              four="$800"
              five="Completed"
              spanClass="bg-green text-white px-2 py-1"
            />
            <FooterChild
              one="Mahmoud Website"
              two="22 May 2021"
              three="Mahmoud"
              four="$600"
              five="Completed"
              spanClass="bg-green text-white px-2 py-1"
            />
            <FooterChild
              one="Sayed Website"
              two="24 May 2021"
              three="Sayed"
              four="$300"
              five="Rejected"
              spanClass="bg-red text-white px-2 py-1"
            />
            <FooterChild
              one="Arena Application"
              two="01 Mar 2021"
              three="Arena Company"
              four="$2600"
              five="Completed"
              spanClass="bg-green text-white px-2 py-1"
            />
          </tbody>
        </table>
      </div>
    </footer>
  );
}

import React, { Fragment } from "react";
import UploadChildContainer from "./UploadChildContainer";

export default function UploadChild() {
  return (
    <Fragment>
      <UploadChildContainer
        address="/dashboard/images/pdf.svg"
        main="my-file.pdf"
        name="Elzero"
        size="2.9mb"
      />
      <UploadChildContainer
        address="/dashboard/images/avi.svg"
        main="My-Video-File.avi"
        name="Admin"
        size="4.9mb"
      />
      <UploadChildContainer
        address="/dashboard/images/psd.svg"
        main="My-Psd-File.pdf"
        name="Osama"
        size="4.5mb"
      />
      <UploadChildContainer
        address="/dashboard/images/zip.svg"
        main="My-Zip-File.pdf"
        name="User"
        size="8.9mb"
      />
      <UploadChildContainer
        address="/dashboard/images/dll.svg"
        main="My-DLL-File.pdf"
        name="Admin"
        size="4.9mb"
      />
      <UploadChildContainer
        address="/dashboard/images/eps.svg"
        main="My-Eps-File.pdf"
        name="Designer"
        size="8.9mb"
      />
    </Fragment>
  );
}

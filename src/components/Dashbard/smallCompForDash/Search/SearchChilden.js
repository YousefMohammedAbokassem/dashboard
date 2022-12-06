import React, { Fragment } from "react";
import SearchChild from "./SearchChild";
export default function SearchChildren() {
  return (
    <Fragment>
      <SearchChild job="Programming" num="220" />
      <SearchChild job="JavaScript" num="180" />
      <SearchChild job="PHP" num="160" />
      <SearchChild job="Code" num="145" />
      <SearchChild job="Design" num="110" />
      <SearchChild job="Logic" num="95" />
    </Fragment>
  );
}

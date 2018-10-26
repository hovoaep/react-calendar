import React from "react";
import Header from "./Header";
import Days from "./Days";
import Cells from "./Cells";

export default () => {
  return (
    <div>
      <div className="calendar">
        <Header />
        <Days />
        <Cells />
      </div>
    </div>
  );
};

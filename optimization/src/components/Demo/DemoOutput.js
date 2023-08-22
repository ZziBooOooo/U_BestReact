import React from "react";
import MyParagrapgh from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMOOUTPUT RUNNING!");
  return <MyParagrapgh>{props.show ? "This is new!" : ""}</MyParagrapgh>;
};

export default React.memo(DemoOutput);

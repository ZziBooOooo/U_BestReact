import React from "react";

const MyParagrapgh = (props) => {
  console.log("MYPARAGRAPGH RUNNING!");
  return <p>{props.children}</p>;
};

export default MyParagrapgh;

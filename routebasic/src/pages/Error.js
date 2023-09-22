import React from "react";
import MainNav from "../components/MainNav";

const Error = () => {
  return (
    <>
      <MainNav />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find the page!</p>
      </main>
    </>
  );
};

export default Error;

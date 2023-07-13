import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagrapgh, setShowParagrapgh] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagrapghHandler = () => {
    // setShowParagrapgh(!showParagrapgh) -> 틀린건 아니지만 바뀔 state가 이전값과 관련있으므로
    setShowParagrapgh((prevShowParagrapgh) => !prevShowParagrapgh);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagrapghHandler}>ToggleParagrapgh</Button>
    </div>
  );
}

export default App;

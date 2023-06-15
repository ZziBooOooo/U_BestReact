import "./App.css";
import UserForm from "./components/UserInput/UserForm";
import UserList from "./components/UserList/UserList";

import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserData = (currentData) => {
    setUserData((prev) => {
      return [currentData, ...prev];
    });
  };

  return (
    <div className="App">
      <UserForm addUserData={addUserData} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;

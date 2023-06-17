import "./App.css";
import UserForm from "./components/UserInput/UserForm";
import UserList from "./components/UserList/UserList";
import Card from "./components/UI/Card";

import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addUserData = (currentData) => {
    setUserData((prev) => {
      return [currentData, ...prev];
    });
  };

  function closeErrModal() {
    if (openModal) {
      setOpenModal(false);
    }
  }
  return (
    <div className="App" onClick={closeErrModal}>
      <UserForm addUserData={addUserData} setOpenModal={setOpenModal} />
      <UserList userData={userData} />
      {openModal ? (
        <>
          <div className="backDrop"></div>
          <Card className="errModal">
            <div>Invalid Input</div>
            <div>Please enter a valid name and age</div>
            <button onClick={() => setOpenModal(false)}>OK</button>
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

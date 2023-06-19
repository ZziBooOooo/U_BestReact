import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { Fragment } from "react";

function App() {
  // App에서 유저리스트를 관리해야
  // 각각 컴포넌트에 데이터를 주고받기 편리할 것

  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) {
    console.log(uName, uAge);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }
  console.log(usersList);
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

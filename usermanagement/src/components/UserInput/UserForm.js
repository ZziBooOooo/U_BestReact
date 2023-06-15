import React from "react";
import Card from "../UI/Card";
import { useState } from "react";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function addBtn(e) {
    e.preventDefault();

    const currentData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };

    props.addUserData(currentData);
  }

  return (
    <Card className="formCard">
      <form>
        <label>
          Username
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </label>
        <label>
          Age (Years)
          <input
            type="text"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          ></input>
        </label>
        <button
          onClick={(e) => {
            addBtn(e);
          }}
        >
          Add User
        </button>
      </form>
    </Card>
  );
};

export default UserForm;

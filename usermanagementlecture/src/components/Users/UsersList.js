import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props.users);
  return (
    <Card classesName={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

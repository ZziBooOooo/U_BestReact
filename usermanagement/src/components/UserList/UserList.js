import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <div>
        {props.userData.map((data, key) => {
          return (
            <ul key={key}>
              <li>{`${data.name}, ${data.age}`}</li>
            </ul>
          );
        })}
      </div>
    </Card>
  );
};

export default UserList;

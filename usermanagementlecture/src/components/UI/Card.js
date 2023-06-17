import React from "react";

import classes from "./Card.module.css";

// Card 컴포넌트에서 className을 지정하면
// props로 이곳에 들어온다!
// 따라서, 클래스 이름이 다른 여러개의 Card를 만들 수 있음
// 만약 여기서 ${props.sccClass}로 받는다면
// <Card sccClass={classes.input}> 이런식으로 전달하는 것
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

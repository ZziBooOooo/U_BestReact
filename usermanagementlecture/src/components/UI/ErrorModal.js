import React from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

// 재사용되는 컴포넌트이기 때문에
// 하드코딩하지 않고 동적으로 데이터를 받아온다!!

// 생각해봐야할것 -> 모달은 어디에서 렌더링할것인가?
// 강사는 AddUser에서 했다.

// AddUser에서 props로 onConfirm={errorHandler} 전달
// 따라서 모달의 백드롭, 버튼을 클릭하면
// errorHandler가 실행됨

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

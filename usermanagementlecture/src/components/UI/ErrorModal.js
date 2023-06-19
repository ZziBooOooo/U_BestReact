import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

// 재사용되는 컴포넌트이기 때문에
// 하드코딩하지 않고 동적으로 데이터를 받아온다!!

// 생각해봐야할것 -> 모달은 어디에서 렌더링할것인가?
// 강사는 AddUser에서 했다.

// AddUser에서 props로 onConfirm={errorHandler} 전달
// 따라서 모달의 백드롭, 버튼을 클릭하면
// errorHandler가 실행됨

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* 렌더링하려는 html요소를 다른 위치로 이동시킴 */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// .reducer 생략가능 - 슬라이스객체 자체를 리듀서로 인식하고 내부적으로 reducer로 사용함
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

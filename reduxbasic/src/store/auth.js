import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// authSlice.reducer는 Redux 스토어의 일부로 사용될 것이며,
// 액션 디스패치에 응답하여 상태를 업데이트

/*console.log(authSlice);
console.log(authSlice.actions);
console.log(authSlice.reducer);*/

export const authActions = authSlice.actions;
export default authSlice.reducer;

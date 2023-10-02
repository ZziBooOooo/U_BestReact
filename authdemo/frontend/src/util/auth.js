import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    // ?mode=login으로 가야하는거 아닌가?
    return redirect("/auth");
  }

  return null;
  // or Error을 throw해 에러페이지로
}

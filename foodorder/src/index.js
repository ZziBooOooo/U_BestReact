import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { CartContextProvider } from "./store/CartData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);

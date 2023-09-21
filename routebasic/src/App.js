import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

createBrowserRouter([{ path: "/", element: <Home /> }, {}]);

function App() {
  return <div></div>;
}

export default App;

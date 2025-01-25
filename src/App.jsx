import { Outlet } from "react-router";
import Nav from "./components/Shared/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;

import { Outlet } from "react-router";
import Nav from "./components/Shared/Nav";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <>
      <HelmetProvider>
        <Nav />
        <Outlet />
      </HelmetProvider>
    </>
  );
}

export default App;

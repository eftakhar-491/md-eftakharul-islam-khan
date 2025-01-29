import { Outlet } from "react-router";
import Nav from "./components/Shared/Nav";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Shared/Footer";
function App() {
  return (
    <>
      <HelmetProvider>
        <Nav />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;

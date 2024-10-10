import { Outlet } from "react-router-dom";
import Header from "../Block/Header";
import Footer from "../Block/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

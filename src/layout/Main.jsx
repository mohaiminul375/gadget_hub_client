import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
      </div>
      <div className="mt-32">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;

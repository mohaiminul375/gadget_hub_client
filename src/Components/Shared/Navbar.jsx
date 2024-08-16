import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems=(<>
    <NavLink>Home</NavLink>
    <NavLink>LogIN</NavLink>
    <NavLink>Register</NavLink>
    </>)
  return (
    <div className="navbar bg-[#4A249D] md:h-16 z-10 fixed">
        <div className="navbar-start">
          <h2 className="text-lg md:text-3xl text-[#55E6A5] shadow-2xl font-Matemasie">
           Gadget Hub
          </h2>
        </div>
        {/* middle side content */}
        <div className="flex-1"></div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">{navItems}</ul>
        </div>
        {/* dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141C27] rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
    
    </div>
  );
};

export default Navbar;

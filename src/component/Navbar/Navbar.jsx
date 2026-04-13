import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li className=''>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#244D3F] text-white" : "font-medium"
                
              }
            >
              <IoHomeOutline />
              HOME
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to={"/timeline"}
              className={({isActive}) =>
                isActive ? "bg-[#244D3F] text-white" : "font-medium"
              }
            >
              <IoHomeOutline />
              Timeline
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to={"/stats"}
              className={({isActive}) =>
                isActive ? "bg-[#244D3F] text-white" : "font-medium"
              }
            >
              <IoHomeOutline />
              Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

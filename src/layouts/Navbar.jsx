import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    color: "rgb(10,124,139)",
    // textDecoration: "underline",
    borderColor: "rgb(10,124,139)",
    paddingBottom: "10px",
  };
  return (
    <nav className="hidden max-w-[1200px] mx-auto px-2 md:flex items-center justify-between mt-14">
      <ul className="flex items-center gap-x-3 lg:gap-x-5">
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
                 </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/aboutus"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About DMI
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/ourservices"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Services
          </NavLink>
        </li>

        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/ourdoctors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Board of Directors
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/onlineprescribtions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
        </li>

        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/urgentcare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Events
          </NavLink>
        </li>
      <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/gallery"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gallery
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
        <NavLink
          to="/donate"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Donate
        </NavLink>
      </li>
      </ul>
      <div className="flex items-center gap-x-2 lg:gap-x-8">
        <i>
          <BsSearch size="20px" fill="grey" className="cursor-pointer" />
        </i>
        <i>
          <IoIosContact size="30px" fill="grey" className="cursor-pointer" />
        </i>
        <Link to="/donate">
          <Button text="DONATE" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

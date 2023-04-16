import React from "react";
import { Link, NavLink, redirect } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "home", url: "" },
    { id: 2, title: "services", url: "services" },
    { id: 3, title: "blog", url: "blog" },
    { id: 4, title: "about", url: "about" },
    { id: 5, title: "contact", url: "contact" },
  ];

  return (
    <nav className="bg-slate-600 w-full h-20 flex justify-center">
      <div className="w-[85%] text-white flex items-center flex-row justify-between">
        <h2 className="text-xl font-bold text-uppercase">LOGO</h2>
        <div>
          <ul className="flex flex-row justify-between gap-5 items-center uppercase text-lg cursor-pointer">
            {navItems.map((item) => {
              return (
                <li
                  className=" border-yellow-500 hover:border-b-2 ease-in"
                  key={item.id}
                >
                  <NavLink to={`/${item.url}`}>{item.title}</NavLink>
                </li>
              );
            })}
            <div className="flex gap-2">
              <Link
                type="button"
                to="/login"
                className="bg-transparent px-3 py-1 border-2 border-yellow-500 rounded-md"
              >
                Login
              </Link>
              <Link
                type="button"
                to="/register"
                className="bg-yellow-600 px-3 py-1 border-2 border-yellow-600  rounded-md text-white"
              >
                Sign up
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

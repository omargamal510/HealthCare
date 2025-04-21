import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function App() {
  const navLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/doctors",
      name: "Doctors",
    },
    {
      href: "/appointments",
      name: "Appointments",
    },
  ];

  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-primary-gray relative pb-20">
      {/* Navigation */}
      <nav className="relative text-black p-4 shadow-2xl flex items-center justify-between px-5 bg-black">
        <Link to={"/"} className="text-3xl font-bold">
          <img src="/nav-icon.png" className="w-48" />
        </Link>

        <ul className="hidden lg:flex space-x-4 text-lg">
          {navLinks.map((e) => (
            <li>
              <NavLink
                to={e.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-cyan font-bold text-xl"
                    : "text-white"
                }
              >
                {e.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-white">
          <button
            onClick={() => setMenuStatus((p) => !p)}
            className="cursor-pointer"
          >
            <Menu />
          </button>

          <ul
            className={`${
              menuStatus ? "block" : "hidden"
            } bg-white z-20  absolute left-0 right-0 top-[70px] shadow-2xl  text-black space-x-4 text-lg`}
          >
            {navLinks.map((e) => (
              <li className="w-full ">
                <NavLink
                  to={e.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary-cyan px-5 w-full block font-bold text-xl"
                      : "text-black w-full px-5"
                  }
                >
                  {e.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <main className="p-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

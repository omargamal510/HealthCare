import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";

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

  return (
    <div className="min-h-screen bg-primary-gray relative pb-20">
      {/* Navigation */}
      <nav className=" text-black p-4 shadow-2xl flex items-center justify-between px-5 bg-black">
        <Link to={"/"} className="text-3xl font-bold">
          <img src="/nav-icon.png" className="w-48" />
        </Link>

        <ul className="flex space-x-4 text-lg">
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
      </nav>
      {/* Routes */}
      <main className="p-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

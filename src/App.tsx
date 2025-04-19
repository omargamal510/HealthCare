import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-gray">
      {/* Navigation */}
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:underline">
              Appointments
            </Link>
          </li>
        </ul>
      </nav>
      {/* Routes */}
      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}

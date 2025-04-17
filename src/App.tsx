import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:underline">
              Home page
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About page
            </Link>
          </li>
        </ul>
      </nav>
      {/* Routes */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

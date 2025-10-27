import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark px-3">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-warning"
                    : "nav-link text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-warning"
                    : "nav-link text-white"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-warning"
                    : "nav-link text-white"
                }
              >
                Tasks
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

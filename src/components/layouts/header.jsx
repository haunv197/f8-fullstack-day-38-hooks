import { NavLink } from "react-router";
import Cart from "../cart";

function Header({ menu }) {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between">
          <nav>
            <ul className="flex justify-center">
              {menu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "font-bold" : ""} inline-flex p-3`
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;

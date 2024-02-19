import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/favorite"
      >
        Favorite
      </NavLink>
    </nav>
  );
};
export default Navigation;

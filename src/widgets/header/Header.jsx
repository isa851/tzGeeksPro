import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import headerLogo from "../../shared/headerLogo.png";
import { NavLink,Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container header_wrapper">

        <div className="header_logo">
          <Link to="/">
            <img
              className="header_logo_imgLogo"
              src={headerLogo}
              alt="logo"
            />
          </Link>
        </div>

        <div className="header_nav">
          <div className="header_nav_links">
            <NavLink className="header_nav_links_link" to="/">Понравилось</NavLink>
            <NavLink className="header_nav_links_link" to="/profile">Личный кабинет</NavLink>
            <NavLink className="header_nav_links_link" to="/settings">Настройки</NavLink>
          </div>

          <div className="header_nav_icons">
            <FiShoppingCart className="header_nav_icons_icon" />
            <CiSearch className="header_nav_icons_icon" />
          </div>
        </div>

      </div>
    </div>
  );
}

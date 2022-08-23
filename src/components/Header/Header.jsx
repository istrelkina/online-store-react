import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import "./../../App.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderTop from "./HeaderTop/HeaderTop";
import logo from "./../../images/icons/logo.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.top}>
        <HeaderTop />
        <div className={style.header__logo}>
          <div className={`container ${style.container_logo}`}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;

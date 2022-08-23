import { Link } from "react-router-dom";
import style from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <div className={style.menu}>
      <div className={`container ${style.container_menu}`}>
        <ul className={style.nav}>
          <li className={style.item}>
            <Link className={`${style.link} ${style.link_active}`} to="/">
              home
            </Link>
          </li>
          <li className={style.item}>
            <Link className={style.link} to="/">
              shop
            </Link>
          </li>
          <li className={style.item}>
            <Link className={style.link} to="/">
              blog
            </Link>
          </li>
          <li className={style.item}>
            <Link className={style.link} to="/">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;

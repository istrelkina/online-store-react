import { Link } from "react-router-dom";
import style from "./HeaderTop.module.scss";
import "./../../../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderTop = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.container__top} container`}>
        <div className={style.mail}>
          <Link className={style.mail_link} to="/" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
            clothestore@gmail.com
          </Link>
        </div>
        <div className={style.info}>
          <div className={style.search}>
            <input type="text" className={style.input} placeholder="Search..." />
            <button className={style.search_btn}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={style.login}>
            <Link className={style.login_link} to="/" target="_blank">
              <FontAwesomeIcon icon={faUser} />
              Login
            </Link>
          </div>
          <div className={style.cart}>
            <Link className={style.cart_link} to="/">
              <FontAwesomeIcon icon={faCartShopping} />
              My Cart - 0
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

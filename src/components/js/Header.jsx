import { Link } from "react-router-dom";
import style from "./../scss/Header.module.scss";

const Header = () => {
  return (
    <header class="header">
      <div class="header__top top">
        <div class="top__wrapper">
          <div class="container container-top">
            <div class="top__mail">
              <Link class="top__mail-link" to="/" target="_blank">
                <i class="fas fa-envelope"></i>clothestore@gmail.com
              </Link>
            </div>
            <div class="top__info">
              <div class="top__search">
                <input type="text" class="top__input" placeholder="Search..." />
                <button class="top__search-btn">
                  <span class="fa fa-search"></span>
                </button>
              </div>
              <div class="top__login">
                <i class="fa-solid fa-user"></i>
                <Link class="top__login-link" to="/" target="_blank">
                  Login
                </Link>
              </div>
              <div class="top__cart">
                <Link class="top__cart-link" to="/">
                  <i class="fa-solid fa-cart-shopping"></i>My Cart - 0
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="header__logo">
          <div class="container container-logo">
            <Link to="/">
              <img src="img/logo.svg" alt="" />
            </Link>
          </div>
        </div>
        <div class="header__menu menu">
          <div class="container container-menu">
            <ul class="menu__nav">
              <li class="menu__item">
                <Link class="menu__link menu__link_active" to="/">
                  home
                </Link>
              </li>
              <li class="menu__item">
                <Link class="menu__link" to="/">
                  shop
                </Link>
              </li>
              <li class="menu__item">
                <Link class="menu__link" to="/">
                  blog
                </Link>
              </li>
              <li class="menu__item">
                <Link class="menu__link" to="/">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

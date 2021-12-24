import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../js/userSlice/userSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handlelogout = () => {
    dispatch(logout());
    history.push("/login");
    window.location.reload();
  };
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);
  return (
    <section
      data-bs-version="5.1"
      className="menu menu1 cid-sOnyjK30Hb"
      once="menu"
      id="menu1-0"
    >
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/">
                <a>
                  <img
                    src="assets/images/logoo.png"
                    alt="logo"
                    style={{ height: "4.4rem" }}
                  />
                </a>
              </Link>
            </span>
            <span className="navbar-caption-wrap">
              <Link to="/">
                <a className="navbar-caption text-black display-5">
                  Public Library
                </a>
              </Link>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav nav-dropdown nav-right"
              data-app-modern-menu="true"
            >
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link link text-black display-4">
                    <span className="mobi-mbri mobi-mbri-home mbr-iconfont mbr-iconfont-btn" />
                    Home
                    <br />
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link link text-black display-4"
                  href="/contact"
                >
                  <span className="mobi-mbri mobi-mbri-users mbr-iconfont mbr-iconfont-btn" />
                  Contact
                  <br />
                </a>
              </li>

              <li className="nav-item">
                <Link to="books">
                  <a className="nav-link link text-black display-4">
                    <span className="mobi-mbri mobi-mbri-bootstrap mbr-iconfont mbr-iconfont-btn" />
                    Books
                  </a>
                </Link>
              </li>
              {isAuth ? (
                <div>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link link text-black dropdown-toggle show display-4"
                      href="#"
                      data-toggle="dropdown-submenu"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn" />
                      Profile
                    </a>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdown-undefined"
                      data-bs-popper="none"
                    >
                      <a
                        className="text-black dropdown-item display-4"
                        href="/editbook"
                      >
                        <span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />
                        Edit Profile
                      </a>
                      <a
                        onClick={handlelogout}
                        className="text-black show dropdown-item display-4"
                        href="#"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        <span className="mobi-mbri mobi-mbri-logout mbr-iconfont mbr-iconfont-btn" />
                        Log out
                      </a>
                    </div>
                  </li>
                </div>
              ) : (
                <div>
                  <Link to="login">
                    <a className="text-black show dropdown-item display-4">
                      <span
                        className="mobi-mbri mobi-mbri-logout mbr-iconfont mbr-iconfont-btn"
                        style={{ alignSelf: "center" }}
                      />
                      Log In
                    </a>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;

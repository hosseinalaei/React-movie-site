import React, { useState } from "react";
import { Link } from "react-router";
import Modal from "../../components/Modal/Modal";
import Login from "../../components/Login/Login";
import Style from "./style";
import Search from "../../components/Search.js/Search";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const clickShowLogin = () => {
    setShowLogin(true);
  };
  const closeModal = () => {
    setShowLogin(false);
  };
  return (
    <>
      <Style>
        {/* <div className="container d-flex flex-column flex-md-row justify-content-between"> */}
        <div className="container">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-12">
              <div className="header-content">
                <Link to="/">
                  <img src="/assets/images/logo/logo.svg" alt="logo" />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Search />
                <button className="button" onClick={clickShowLogin}>
                  Login
                </button>
                {showLogin ? (
                  <Modal show={showLogin} close={closeModal}>
                    <Login />
                  </Modal>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Style>
    </>
  );
}

export default Header;

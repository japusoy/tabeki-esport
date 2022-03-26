import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "../../../constants/actionTypes";
import { sidebarMini } from "../../../actions/common";
import "./style.scss";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [commonData, setCommonData] = useState({
    collapse: null,
  });
  const common = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    setCommonData(common);
  }, [location, common]);

  const handleMenu = () => {
    dispatch(sidebarMini(commonData.collapse));
  };

  return (
    <>
      <header
        id="header"
        style={{
          backgroundImage:
            "url(https://telerik.github.io/react-coffee-warehouse/static/media/header-bg.f1a95872.png)",
        }}
      >
        <div className="nav-container">
          <div className="menu-button" onClick={handleMenu}>
            <span className="k-icon k-i-menu" />
          </div>
          <div className="title">
            <h1>Jmaglinte Template</h1>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user?.result ? (
              <div className="md:flex items-center gap-3">
                <h6>{user?.result.name}</h6>
                <div className="avatar">
                  <span>
                    <img src={user?.result.imageUrl} alt={user?.result.name} />
                  </span>
                </div>
                <Link
                  to="/auth"
                  className=""
                  onClick={logout}
                >
                  {" "}
                  Log out{" "}
                </Link>
              </div>
            ) : (
              <Link
                to="/auth"
                className=""
              >
                {" "}
                Sign in{" "}
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './style.scss';

/* eslint-disable */
const Sidebar = () => {
  const [commonData, setCommonData] = useState({
    collapse: null,
  });
  const common = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    setCommonData(common);
    console.log(commonData);
  }, [common]);

  return (
    <div id="sidebar" className={!commonData.collapse ? "sidebar-mini" : ""}>
      <ul>
        <li className="item item-selected">
          <span className="k-icon k-i-grid" />
          {commonData.collapse ? (
			  <NavLink to="/dashboard" className="k-item-text">Dashboard</NavLink>
          ) : (
            ""
          )}
        </li>
        <li className="item">
          <span className="k-icon k-i-js" />
          {commonData.collapse ? (
			  <NavLink to="/forms" className="k-item-text">Forms</NavLink>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

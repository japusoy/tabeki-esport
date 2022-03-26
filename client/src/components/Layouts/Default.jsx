import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@progress/kendo-theme-default/dist/all.css";

import Header from "../Common/Header/Header";
import Sidebar from "../Common/Sidebar/Sidebar";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import Forms from "../Forms/Forms";

const Default = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div id="app-drawer">
        <Sidebar />
        <div id="drawer-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default Default;

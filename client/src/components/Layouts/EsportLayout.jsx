import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Common/Header/Header2";
import Middle from "../Middle/Middle";
import Footer from "../Common/Footer/Footer";

import "../../assets/css/media.scss";

const EsportLayout = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Middle />
      <Footer />
    </div>
  </BrowserRouter>
);

export default EsportLayout;

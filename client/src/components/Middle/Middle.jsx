import React from 'react';
import { images } from "../../constants";

import "./style.scss";

/* eslint-disable */
const Middle = () => {
	return (
    <div id="middle">
      <div className="wrapper">
        <h1>Meet The Team</h1>
        <div className="team">
          <div className="box">
            <img src={images.img1} />
            <h2>
              James <span>Lorem Ipsum</span>
            </h2>
          </div>
          <div className="box">
            <img src={images.img2} />
            <h2>
              Jade <span>Lorem Ipsum</span>
            </h2>
          </div>
          <div className="box">
            <img src={images.img3} />
            <h2>
              Kenneth <span>Lorem Ipsum</span>
            </h2>
          </div>
          <div className="box">
            <img src={images.img4} />
            <h2>
              Rodney <span>Lorem Ipsum</span>
            </h2>
          </div>
          <div className="box">
            <img src={images.img5} />
            <h2>
              Nash <span>Lorem Ipsum</span>
            </h2>
          </div>
          <div className="box">
            <img src={images.img6} />
            <h2>
              Ian <span>Lorem Ipsum</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
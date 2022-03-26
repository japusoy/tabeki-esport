import React from 'react';
import { Input } from "@progress/kendo-react-inputs";
import { ComboBox } from "@progress/kendo-react-dropdowns";

/* eslint-disable */
const Forms = () => {
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];

  return (
    <div className="clearfix">
      <div className="formBox">
        <div className="formBoxCol3">
          <div className="group">
            <div className="k-form-field">
              <label className="k-label" htmlFor="username">
                Input:
              </label>
              <div className="k-form-field-wrap">
                <Input
                  form="input"
                  name="username"
                  id="username"
                  placeholder="Input text here"
                />
              </div>
            </div>
          </div>
          <div className="group">
            <div className="k-form-field">
              <label className="k-label" htmlFor="username">
                ComboBox:
              </label>
              <div className="k-form-field-wrap">
                <ComboBox data={sizes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
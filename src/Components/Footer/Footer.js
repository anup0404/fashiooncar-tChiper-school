import React from "react";
import "./Footer.css";

import Top from "../Top/Top";
function Footer(props) {
  return (
    <div className="footer_container">
      <div className="left_footer_container">
        <p>{props.desc2}<br/>
          <span>{props.brand}</span></p>
      </div>
      <div className="right_footer_container">
        <p>
          20% <br /> Off
        </p>
      </div>
    </div>
  );
}

export default Footer;

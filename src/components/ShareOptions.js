import React, { Fragment } from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import shareIcon from "../assets/images/icon-share.svg";

function ShareOptions(props) {
  return (
    <Fragment>
      <div className={`share-options ${props.shareActive && "active"}`}>
        <div className="share-label">SHARE</div>
        <div className="facebook-icon">
          <img src={facebookIcon} alt="facebook icon" />
        </div>
        <div className="twitter-icon">
          <img src={twitterIcon} alt="twitter icon" />
        </div>
        <div className="pinterest-icon">
          <img src={pinterestIcon} alt="pinterest icon" />
        </div>
        <div className="share-btn" onClick={props.shareHandler}>
          <img src={shareIcon} alt="share icon" />
        </div>
      </div>
    </Fragment>
  );
}

export default ShareOptions;

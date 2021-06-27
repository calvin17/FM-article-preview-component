import React, { useState } from "react";
import drawers from "../assets/images/drawers.jpg";
import avatar from "../assets/images/avatar-michelle.jpg";
import shareIcon from "../assets/images/icon-share.svg";
import ShareOptions from "./ShareOptions";

function ArticlePreview() {
  const [shareActive, setShareActive] = useState(false);
  function shareHandler() {
    setShareActive(!shareActive);
  }
  return (
    <div className="article-preview">
      <img src={drawers} alt="article" className="article-image" />
      <div className="article-info">
        <h2 className="article-title">
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h2>
        <p className="article-description">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
          uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
        <div className={`article-profile ${!shareActive && "active"}`}>
          <div className="profile">
            <div className="profile-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="profile-information">
              <div className="profile-name">Michelle Appleton</div>
              <div className="profile-date">28 Jun 2020</div>
            </div>
          </div>
          <div className="share-btn" onClick={shareHandler}>
            <img src={shareIcon} alt="share icon" />
          </div>
        </div>
        <ShareOptions shareActive={shareActive} shareHandler={shareHandler} />
      </div>
    </div>
  );
}

export default ArticlePreview;

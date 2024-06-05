import React from "react";
import "../styles/sidebar.css";
import home from "../assets/home.svg";
import Notifications from "../assets/notification.svg";
import Shop from "../assets/heart.svg";
import Conversation from "../assets/message.svg";
import wallet from "../assets/message (1).svg";
import Subscription from "../assets/favorite.svg";
import profile from "../assets/profile.svg";
import setting from "../assets/setting.svg";
import Logout from "../assets/logout.svg";
const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div style={{marginTop:'30px'}}>
          <div className="home">
            <img src={home} />
            <p>Home</p>
          </div>

          <div className="Notifications">
            <img src={Notifications} />
            <p>Notifications</p>
          </div>

          <div className="Shop">
            <img src={Shop} />
            <p>Shop</p>
          </div>

          <div className="Conversation">
            <img src={Conversation} />
            <p>Conversation</p>
          </div>

          <div className="Wallet">
            <img src={wallet} />
            <p>Wallet</p>
          </div>

          <div className="Subscription">
            <img src={Subscription} />
            <p>Subscription</p>
          </div>

          <div className="profile">
            <img src={profile} />
            <p>My profile</p>
          </div>
          <div className="setting">
            <img src={setting} />
            <p>settings</p>
          </div>

          <div className="Logout">
            <img src={Logout} />
            <p>Log out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import "./MyProfile.scss";
import MyProfileDetails from "./MyProfileDetails";
import next from "../../assets/next.png";
import down from "../../assets/down.png";
import MyOrders from "./MyOrders";
import "../../index.css";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";
import person from "../../assets/profileimg.png";
import { useMediaQuery } from "react-responsive";

export default function MyProfile({ shoppingCart }) {
  const [myProfileOpen, setMyProfileOpen] = useState(true);
  const [myOrdersOpen, setMyOrdersOpen] = useState(false);
  const [myProfileOpenMobile, setMyProfileOpenMobile] = useState(false);
  const [myOrdersOpenMobile, setMyOrdersOpenMobile] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });

  const openMyOrdersSection = () => {
    setMyProfileOpen(false);
    setMyOrdersOpen(true);
  };

  const openMyProfileSection = () => {
    setMyOrdersOpen(false);
    setMyProfileOpen(true);
  };

  const openMyProfileSectionMobile = () => {
    setMyOrdersOpenMobile(false);
    setMyProfileOpenMobile((prev) => !prev);
  };

  const openMyOrdersSectionMobile = () => {
    setMyProfileOpenMobile(false);
    setMyOrdersOpenMobile((prev) => !prev);
  };

  return (
    <>
      <Breadcrumbs />
      <section id="shop">
        <div className="profileSection">
          {isMobile ? (
            <>
              <div className="iconNameEmailMob">
                <img src={person} alt="iconNameEmailMobile" />
                <div>
                  <div className="nameEmailMob">Girisk</div>
                  <div className="textGray">girisk@gmail.com</div>
                </div>
              </div>
              <div
                onClick={openMyProfileSectionMobile}
                className="myProfileTabMob"
              >
                <div>
                  <div>My Profile</div>
                  <div className="textGray">Notification, password</div>
                </div>
                <img
                  className={`${myProfileOpenMobile ? "arrowUp" : "arrowDown"}`}
                  src={down}
                  alt="nextArrowProfile"
                />
              </div>
              {myProfileOpenMobile && <MyProfileDetails />}
              <div
                onClick={openMyOrdersSectionMobile}
                className="myProfileTabMob"
              >
                <div>
                  <div>My Orders</div>
                  <div className="textGray">
                    Already have {shoppingCart.items.length} orders
                  </div>
                </div>
                <img
                  className={`${myOrdersOpenMobile ? "arrowUp" : "arrowDown"}`}
                  src={down}
                  alt="nextArrowProfile"
                />
              </div>
              {myOrdersOpenMobile && <MyOrders shoppingCart={shoppingCart} />}
            </>
          ) : (
            <ul className="profileSectionRow">
              <li className="leftSection">
                <div className="iconNameEmail">
                  <img src={person} alt="iconNameEmail" />
                  <div className="nameEmail">
                    <div>Girisk</div>
                    <div className="textGray">girisk@gmail.com</div>
                  </div>
                </div>
                <div onClick={openMyProfileSection} className="myProfileTab">
                  <div>
                    <div>My Profile</div>
                    <div className="textGray">Notification, password</div>
                  </div>
                  <img src={next} alt="nextArrowProfile" />
                </div>

                <div onClick={openMyOrdersSection} className="myProfileTab">
                  <div>
                    <div>My Orders</div>
                    <div className="textGray">
                      Already have {shoppingCart.items.length} orders
                    </div>
                  </div>
                  <img src={next} alt="nextArrowProfile" />
                </div>
              </li>
              <li className="rightSection">
                {myProfileOpen && <MyProfileDetails />}
                {myOrdersOpen && <MyOrders shoppingCart={shoppingCart} />}
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

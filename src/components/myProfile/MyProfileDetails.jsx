import React from "react";
import './MyProfileDetails.scss';
import { useMediaQuery } from "react-responsive";

export default function MyProfileDetails () {
  const isMobile = useMediaQuery({ query: '(max-width: 997px)' });

    return (
        <div className="MyProfileDetailsSection">
        <div>My Profile</div>
        <ul className="nameField">
          <li className="firstName">
          <input placeholder={"First name"} />
          </li>
          <li className="lastName">
          <input placeholder={"Last name"} />
          </li>
        </ul>
        <ul className="emailField">
          <input placeholder={"Email"} />
        </ul>
        <ul className="emailField">
        <input placeholder={"Phone number"} />
        </ul>
        <ul className="emailField">
        <input placeholder={"Password"} />
        </ul>
        <ul className="emailField">
        <input placeholder={"Confirm Password"} />          
        </ul>
        <ul className="newAddress">{isMobile ?  "SAVE CHANGES" : "ADD NEW ADDRESS" }
        </ul>
          
        </div>
    );
}
import React from "react";
import guy from '../../assets/reachUs.png';
import pin from '../../assets/pin.png';
import './HomePage.scss';

export default function Subscribe() {
  return <>
    <div className="reachUsImg">
        <img src={guy} alt="reachUs" />
        <div className="info">GET COUPONS & STYLE GUIDES</div>
        <div className="newsLetter">Subscribe to our Newsletter</div>
        <input  defaultValue={""}/>
        <button className="redBtn">SUBSCRIBE</button>
        <div className="locateUs">
          <img src={pin} alt="mapIcon" />
          <div>LOCATE US</div>
        </div>
    </div>

    <div className="footer">
      <div className="flexFooter">
        <div>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Returns & Exchange</p>
          <p>Technical & Privacy</p>
          <p>Order Status</p>
        </div>

        <div>
        <div className="madeUp">
            <h3>MADE UP</h3>
        </div>
        <p>Stay in touch with us</p>
        </div>

        <div>
          <p>Our Corporate Office  </p>
          <p>No: 7,A2B road, Adayar Rajpuram,</p>
          <p> T-Nagar, Chennai - 642002.</p>

          <div className="margintop">
            <p>sales@madeup.com</p>
            <p>044 9999 9999</p>
          </div>
        </div>

      </div>
    </div>
  </>;
}

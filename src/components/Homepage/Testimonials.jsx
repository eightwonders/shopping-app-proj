import React from "react";
import './HomePage.scss';
import { FaStar } from "react-icons/fa";
import { DUMMY_USER } from '../../testimonial-data';
import vikas from '../../assets/vikas.jpg';

export default function Testimonials() {


  return (
    <>
    <div className="testimonialsTitle">TESTIMONIALS</div>
    <ul className="testimonialRow">
      {DUMMY_USER.map((user, id) => {
        return (
          <li key={user.id} className="eachUserCol">
            <div className="box">
              <img className="vikasImg" src={vikas} alt={id} />
              <div className="firstRowTitle">
                <div className="userName">{user.name}</div>
                <div className="rating">
                  {[...Array(user.starPoint)].map((_, index) => (
                    <FaStar
                      key={index}
                      style={{ color: "#FDC02F", fontSize: "15px" }}
                    />
                  ))}
                </div>
              </div>
              <div className="description">{user.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
    </>
  );
}

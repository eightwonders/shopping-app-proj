import React from "react";
import './MyProfile.scss';
import orders from '../../assets/orders.png';

export default function MyOrders ({ shoppingCart }) {
    return (
        <>
        {console.log("shoppingCart",shoppingCart)}
        <div className="myOrdersTitle"> My Orders </div>
        {shoppingCart.items.map((item, index)=> {
            return (
                <div className="eachOrder">
            <img className="ordersImg" src={orders} alt={index} />
            <div className="midAlign">
                <div className="orderNum">Order {item.id}</div>
                <div className="orderName">{item.name}</div>
                <div className="orderNum">Express delivery by Sat, Aug 30</div>
            </div>
            <div className="righAlign">
            <div className="orderNum">Credit Card Payment</div>
            <div className="orderName">Rs {item.price * item.quantity}</div>

            </div>
        </div>
        )})            
        }
        <p>{shoppingCart.items.length === 0 ? "You have 0 items in your Cart" : ""}</p>
        </>
    );
}
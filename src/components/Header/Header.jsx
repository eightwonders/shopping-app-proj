import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import '../../index.css';
import CartModal from '../Cart/CartModal';
import SearchIcon from '../../assets/search.png';
import Cart from '../../assets/cart.png';
import Profile from '../../assets/user.png';

export default function Header({ cart, onUpdateCartItemQuantity, handleOpenProfile, clickHeaderTestPageHandler }) {
  const modal = useRef();
  const navigate = useNavigate();
  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  const handleOpenMyOrdersClick =()=> {
    console.log("Checkout",location)
    navigate('/Home/Profile');

  };

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={handleOpenMyOrdersClick}>Checkout</button>
      </>
    );
  }

  const headers = ["For ME", "Jeans", "Shirts", "Trousers", "Jaggers", "Shorts"];

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title" className="madeUp">
          <Link to="/Home">
            <h3>MADE UP</h3>
          </Link>
        </div>
        <div className="headerMain">
          {headers.map((items, index) => (
            <div key={index} className="section">
              {items}
            </div>
          ))}
        </div>

        <div className="headerIcons">
          <img src={SearchIcon} alt="searchIcon" />
          <div className="cartContainer">
            <img src={Cart} alt="cartIcon" onClick={handleOpenCartClick} />
            <span className="cart-count">{cartQuantity}</span>
          </div>
          <img
            src={Profile}
            alt="profileIcon"
            className="profileIcon"
            onClick={handleOpenProfile}
          />
        </div>
      </header>
    </>
  );
}

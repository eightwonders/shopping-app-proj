import SearchIcon from '../../../assets/search.png';
import './Header.scss';
import Cart from '../../../assets/cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import CartModal from '../../Cart/CartModal';

export default function MobileHeader({ cart, onUpdateCartItemQuantity, openMenuHandler }) {
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

  return (
    <>
    <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <div className="logoHeader">
        <div className="madeUp">
          <Link to='/Home'><h3>MADE UP</h3></Link>          
        </div>

        <img src={SearchIcon} alt="searchIcon" />
        <div className="cartContainer">
          <img src={Cart} alt="cartIcon" onClick={handleOpenCartClick} />
          <span className="cart-count">{cartQuantity}</span>
        </div>

        <button aria-label="Open Menu" onClick={() => openMenuHandler()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#333"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="6" width="18" height="2" rx="1" />
            <rect x="3" y="11" width="18" height="2" rx="1" />
            <rect x="3" y="16" width="18" height="2" rx="1" />
          </svg>
        </button>
      </div>
    </>
  );
}

import '../../index.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MobileHeader from '../Mobile/Header/MobileHeader';
import { useMediaQuery } from 'react-responsive';

export default function Layout(
  { cart, onUpdateCartItemQuantity, handleOpenProfile, openMenuHandler, clickHeaderTestPageHandler  }
) {
  const isMobile = useMediaQuery({ query: '(max-width: 997px)' });
    return (
      <>
        {isMobile ? (
          <MobileHeader
            cart={cart}
            onUpdateCartItemQuantity={onUpdateCartItemQuantity}
            openMenuHandler={openMenuHandler}
            clickHeaderTestPageHandler={clickHeaderTestPageHandler}
          />
        ) : (
          <Header
            cart={cart}
            onUpdateCartItemQuantity={onUpdateCartItemQuantity}
            handleOpenProfile={handleOpenProfile}
            clickHeaderTestPageHandler={clickHeaderTestPageHandler}
          />
        )}
        <Outlet />
      </>
    );
}
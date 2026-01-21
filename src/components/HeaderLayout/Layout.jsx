import '../../index.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MobileHeader from '../Mobile/Header/MobileHeader';
import { useMediaQuery } from 'react-responsive';

export default function Layout(
  { cart, onUpdateCartItemQuantity, handleOpenProfile, openMenuHandler }
) {
  const isMobile = useMediaQuery({ query: '(max-width: 997px)' });
    return (
      <>
        {isMobile ? (
          <MobileHeader
            cart={cart}
            onUpdateCartItemQuantity={onUpdateCartItemQuantity}
            openMenuHandler={openMenuHandler}
          />
        ) : (
          <Header
            cart={cart}
            onUpdateCartItemQuantity={onUpdateCartItemQuantity}
            handleOpenProfile={handleOpenProfile}
          />
        )}
        <Outlet />
      </>
    );
}
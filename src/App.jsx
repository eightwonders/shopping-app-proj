import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyProfile from './components/myProfile/MyProfile';
import { DUMMY_PRODUCTS } from './dummy-products';
import Layout from './components/HeaderLayout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import Shop from './components/Homepage/Shop';
import { TestPage } from './components/DummyDevPage/TestPage';

function App() {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });
  const navigate = useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenuHandler = (e) => {
    console.log("open menu")
    setOpenMobileMenu(true);
  }
  function handleAddItemToCart(id) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const index = updatedItems.findIndex((item) => item.id === id);
      const existingItem = updatedItems[index];

      if (existingItem) {
        updatedItems[index] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === id);
        updatedItems.push({
          id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
    toast.success('Item added to cart successfully!');
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prev) => {
      const updatedItems = [...prev.items];
      const index = updatedItems.findIndex((item) => item.id === productId);
      const item = { ...updatedItems[index] };

      item.quantity += amount;
      if (item.quantity <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index] = item;
      }

      return { items: updatedItems };
    });
  }

  function handleOpenProfile() {
    navigate('/Home/Profile');
  }
  const clickHeaderTestPageHandler = (e) => {
    navigate(`/Home/TestPage`);
  }
  
  // useEffect(() => {
  //   console.log("openMobileMenu changed:", openMobileMenu);
  //   // setOpenMobileMenu(true);

  //   // You can do any side-effect here
  //   // For example: scroll lock, animation trigger, API call, etc.

  //   return () => {
  //     // Optional cleanup when the component unmounts or before state changes again
  //   };
  // }, [openMobileMenu]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={shoppingCart}
              onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
              handleOpenProfile={handleOpenProfile}
              openMenuHandler={openMenuHandler}
            />
          }
        >
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route
            path="Home"
            element={
              <Shop
                onAddItemToCart={handleAddItemToCart}
                openMobileMenu={openMobileMenu}
                clickHeaderTestPageHandler={clickHeaderTestPageHandler}
                setOpenMobileMenu={setOpenMobileMenu}
              />
            }
          />
          <Route
            path="Home/Profile"
            element={<MyProfile shoppingCart={shoppingCart} />}
          />
        </Route>
        <Route
          path="Home/TestPage"
          element={
            <>
              <Layout
                cart={shoppingCart}
                onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                handleOpenProfile={handleOpenProfile}
                openMenuHandler={openMenuHandler}
              />
              <TestPage
                onAddItemToCart={handleAddItemToCart} />
            </>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

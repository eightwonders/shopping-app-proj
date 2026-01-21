
import Product from './Product.jsx';
import image from '../../assets/img1.jpeg';
import '../Header/Header.scss';
import MidSection from './MidSection.jsx';
import Testimonials from './Testimonials.jsx';
import { DUMMY_PRODUCTS } from '../../dummy-products.js';
import Subscribe from './Subscribe.jsx';
import SidebarMenu from '../Mobile/Header/SidebarMenu.jsx'

export default function Shop({ 
  onAddItemToCart, openMobileMenu, setOpenMobileMenu
}) {

  return (
    <section id="shop">
      <div className="mainImage">
      {openMobileMenu && (
          <SidebarMenu setOpenMobileMenu={setOpenMobileMenu}/>
      )}
        <img src={image} alt="mainImage" />
        <div className="imgInsideA">
          {"Clothes that "}
          <div className="imgInsideRed">&nbsp;{"respire"}</div>
        </div>
        <div className="imgInsideB">
          {"for men who "}
          <div className="imgInsideRed">&nbsp;{"aspire"}</div>
        </div>
        <div className="collections">{"BROWSE COLLECTIONS"}</div>
      </div>
      <MidSection onAddToCart={onAddItemToCart} />
      <h2 className="latestCollection">Latest Collections</h2>
      <ul id="products" className="rowSize">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="pdtColSize">
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
      <Testimonials />
      <Subscribe />
    </section>
  );
}

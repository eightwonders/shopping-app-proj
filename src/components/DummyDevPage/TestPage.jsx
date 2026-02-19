import './TestPage.scss';
import '../Header/Header.scss';
import { DUMMY_PRODUCTS } from '../../dummy-products';
import Product from '../Homepage/Product';

export const TestPage = ({ onAddItemToCart }) => {

    return ( 
      <div className="testPageOutlook">
        <h2 className="latestCollection">Latest Collections</h2>
        <ul id="products" className="rowSize">
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id} className="pdtColSize">
              <Product {...product} onAddToCart={onAddItemToCart} />
            </li>
          ))}
        </ul>
      </div>
    );
}
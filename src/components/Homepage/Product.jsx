export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>{price}.00</p>
          <p className='addCart' onClick={() => onAddToCart(id)}>{"Add to Cart"}</p>
        </div>
      </div>
    </article>
  );
}

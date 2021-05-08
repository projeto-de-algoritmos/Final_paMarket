import './styles.css';

const RelatedProduct = ({ image, name, price }) => {
  return (
    <div className="related-product-container">
      <img
        className="related-product-image"
        src={`/products/${image}`}
        alt="Product"
      />

      <div>
        <h1 className="related-product-item-name">{name}</h1>
        <h2 className="related-product-item-price">{price}</h2>
      </div>
    </div>
  );
};

export default RelatedProduct;

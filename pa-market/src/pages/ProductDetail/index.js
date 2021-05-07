import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import { products } from '../../data/products.js';
import { formatPrice } from '../../utils/formatPrice.js';

const ProductDetail = (props) => {
  const productId = props.match.params.id;
  const product = products[productId - 1];

  return (
    <div className="product-detail-container">
      <Header />

      <div className="product-detail-item">
        <img
          className="product-detail-image"
          src={`/products/${product.image}`}
          alt="Product Logo"
        />

        <div className="product-detail-item-info">
          <h1 className="product-detail-item-info-name">{product.name}</h1>
          <h2 className="product-detail-item-info-price">
            {formatPrice(product.price)}
          </h2>
        </div>
      </div>

      <div className="product-detail-line" />

      <h1 className="product-detail-category-title">
        Produtos da mesma Categoria
      </h1>
      <div className="product-detail-category-list">
        {products.map((item) => (
          <div className="product-detail-category-box">
            <img
              className="product-detail-category-image"
              src={`/products/${item.image}`}
              alt="Product"
            />

            <div>
              <h1 className="product-detail-category-item-name">{item.name}</h1>
              <h2 className="product-detail-category-item-price">
                {formatPrice(item.price)}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

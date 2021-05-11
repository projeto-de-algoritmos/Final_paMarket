import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import RelatedProduct from '../../components/RelatedProduct';
import { products } from '../../data/products.js';
import { populateGraph } from '../../data/populateGraph.js';
import { formatPrice } from '../../utils/formatPrice.js';

const ProductDetail = (props) => {
  const [productsSelected, setProductsSelected] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const productId = props.match.params.id;
  const product = products[productId - 1];

  useEffect(() => {
    const productsSameSector = products.filter(
      (item) => item.sector === product.sector
    );
    setProductsSelected(productsSameSector);

    const graph = populateGraph();
    const minimalSpanningTree = graph.prim(productId.toString());

    setRelatedProducts(
      minimalSpanningTree.edges.filter((item) => item.source === `${productId}`)
    );
  }, [product.sector, productId]);

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
        Produtos da mesma categoria
      </h1>
      <div className="product-detail-category-list">
        {productsSelected.map((item) => (
          <Link
            key={item.id}
            className="product-detail-link"
            to={`/products/${item.id}`}
          >
            <RelatedProduct
              image={item.image}
              name={item.name}
              price={formatPrice(item.price)}
            />
          </Link>
        ))}
      </div>

      <div className="product-detail-line" />

      <h1 className="product-detail-category-title">
        Quem viu este produto, viu também
      </h1>
      <div className="product-detail-related-list">
        {relatedProducts.map((item) => (
          <Link
            key={item.id}
            className="product-detail-link"
            to={`/products/${item.id}`}
          >
            <RelatedProduct
              image={`${item.target}.png`}
              name={products[parseInt(item.target) - 1].name}
              price={formatPrice(products[parseInt(item.target) - 1].price)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

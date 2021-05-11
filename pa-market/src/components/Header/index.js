import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiFilter } from 'react-icons/fi';

const Header = ({ filterVisible, onClick }) => {
  return (
    <div className="header-container">
      <Link className="header-logo" to="/">
        <FiShoppingCart size={26} color="#FFF" />
        <h1 className="header-title">paMarket</h1>
      </Link>

      {filterVisible ? (
        <button className="header-filter" onClick={onClick}>
          <FiFilter size={26} color="#FFF" />
        </button>
      ) : null}
    </div>
  );
};

export default Header;

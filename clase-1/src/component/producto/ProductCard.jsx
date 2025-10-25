// src/components/ProductCard.jsx
import React from 'react';
import './productCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (product.inStock && onAddToCart) {
      onAddToCart(product);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="out-of-stock-overlay">Agotado</div>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="rating-number">({product.rating})</span>
        </div>
        
        <div className="product-footer">
          <div className="price-container">
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
          
          <button 
            className={`btn-add-cart ${!product.inStock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
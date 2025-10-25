// src/components/ProductsGrid.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, getAllCategories } from '../../data/dataCart';
import './ProductsGrid.css';

const ProductsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = getAllCategories();

  const handleAddToCart = (product) => {
    console.log('Producto agregado al carrito:', product);
    alert(`¡"${product.name}" agregado al carrito!`);
    // Aquí puedes implementar tu lógica de carrito
  };

  // Filtrar productos según categoría y búsqueda
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-section">
      <div className="products-header">
        <h1 className="products-title">🛍️ Nuestros Productos</h1>
        <p className="products-subtitle">Encuentra los mejores productos para ti</p>
      </div>

      <div className="filters-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No se encontraron productos</p>
        </div>
      ) : (
        <>
          <div className="products-count">
            Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsGrid;
export const products = [
  {
    id: 1,
    name: "Camiseta Premium",
    description: "Camiseta de algodón 100% con diseño exclusivo",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "Ropa",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Zapatillas Deportivas",
    description: "Zapatillas ultra cómodas para todo tipo de actividad",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Calzado",
    inStock: false,
    rating: 5
  },
  {
    id: 3,
    name: "Mochila Urbana",
    description: "Mochila resistente con múltiples compartimientos",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Accesorios",
    inStock: false,
    rating: 4
  },
  {
    id: 4,
    name: "Gorra Snapback",
    description: "Gorra ajustable con visera plana",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    category: "Accesorios",
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    name: "Reloj Digital",
    description: "Reloj inteligente con múltiples funciones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Tecnología",
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "Auriculares Bluetooth",
    description: "Sonido de alta calidad con cancelación de ruido",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Tecnología",
    inStock: true,
    rating: 4.7
  },
  
]

export const getAllCategories = () => {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories);
};
import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/Product/ProductList";
import Cart from "../components/Cart/Cart";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/productService";

const Home = () => {
  const { addToCart, cart } = useContext(CartContext);
  const products = getProducts();

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <ProductList products={products} addToCart={addToCart} />
      <Cart />
    </>
  );
};

export default Home;

import React, { useState, useCallback, useEffect } from 'react';
import DataContext from './dataContext'; // Adjust the path as needed

function GlobalProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user] = useState({ name: 'Blue' });
  const [coupons, setCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Fetch coupons from the backend
  useEffect(() => {
    async function fetchCoupons() {
      try {
        const response = await fetch('/api/coupons');
        const data = await response.json();
        setCoupons(data);
      } catch (error) {
        console.error("Failed to fetch coupons:", error);
      }
    }

    fetchCoupons();
  }, []);

  // Add product to cart
  const addProductToCart = useCallback((product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item._id === product._id);

      if (existingProductIndex >= 0) {
        // Update quantity if product already exists
        const newCart = [...prevCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          quantity: newCart[existingProductIndex].quantity + quantity,
        };
        return newCart;
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  }, []);

  // Remove product from cart
  const removeProductFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== productId));
  }, []);

  // Clear the cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Apply a coupon
  const applyCoupon = useCallback((code) => {
    const coupon = coupons.find((coupon) => coupon.code === code);
    if (coupon) {
      setAppliedCoupon(coupon);
    } else {
      setAppliedCoupon(null);
    }
  }, [coupons]);

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        user,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        applyCoupon,
        appliedCoupon,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;

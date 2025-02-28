// Import createContext from React to create a context for the data
import { createContext } from "react";

// Create a DataContext with default values
const DataContext = createContext({
  cart: [], // An array to hold the products in the cart
  user: {}, // An object to hold user information

  // Function to add a product to the cart
  addProductToCart: () => {},

  // Function to remove a product from the cart
  removeProductFromCart: () => {},

  // Function to clear all products from the cart
  clearCart: () => {},
});

// Export the DataContext to be used in other parts of the application
export default DataContext;

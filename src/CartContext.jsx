import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  items: {},
  totalItems: 0,
};

// Create context
const CartContext = createContext(initialState);

// Reducer to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      const existingItem = state.items[newItem.id];
      const updatedItem = existingItem
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : { ...newItem, quantity: 1 };
      const updatedItems = { ...state.items, [newItem.id]: updatedItem };
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + 1,
      };
    case "REMOVE_ITEM":
      const newItems = { ...state.items };
      if (newItems[action.id].quantity > 1) {
        newItems[action.id].quantity -= 1;
      } else {
        delete newItems[action.id];
      }
      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems - 1,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Helper functions
  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

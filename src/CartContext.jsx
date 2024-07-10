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
      return {
        ...state,
        items: { ...state.items, [newItem.id]: updatedItem },
        totalItems: state.totalItems + 1,
      };
    case "DECREMENT_ITEM":
      if (state.items[action.id] && state.items[action.id].quantity > 1) {
        const decrementedItem = {
          ...state.items[action.id],
          quantity: state.items[action.id].quantity - 1,
        };
        return {
          ...state,
          items: { ...state.items, [action.id]: decrementedItem },
          totalItems: state.totalItems - 1,
        };
      } else {
        return state; // If item quantity is 1 or less, do nothing
      }
    case "REMOVE_ITEM":
      const remainingItems = { ...state.items };
      if (remainingItems[action.id]) {
        const updatedTotalItems =
          state.totalItems - remainingItems[action.id].quantity;
        delete remainingItems[action.id];
        return {
          ...state,
          items: remainingItems,
          totalItems: updatedTotalItems,
        };
      }
      return state;
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const decrementItem = (id) => dispatch({ type: "DECREMENT_ITEM", id });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ ...state, addItem, decrementItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export { CartContext };

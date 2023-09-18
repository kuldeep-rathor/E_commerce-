import React from "react";
import { useReducer, useState, useEffect } from "react";
import CartContext from "./Cart-Context";
import axios from "axios";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const url = "https://e-commerce-9df21-default-rtdb.firebaseio.com/";
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = state.items;
    const findItem = state.items.find((item) => item.id === action.item.id);
    if (findItem) {
      findItem.amount += 1;
    } else updatedItems = [...state.items, action.item];

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems = state.items;
    const findItem = state.items.find((item) => item.id === action.id);
    if (findItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      findItem.amount -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - findItem.price,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const addItemToCartHandler = async (item) => {
    dispatchCartAction({ type: "ADD", item: item });

    // Store the updated cart in Firebase
    try {
      await axios.put(url, { items: cartState.items }); // Send the cart data in the request body
    } catch (error) {
      console.error("Error storing cart in Firebase:", error);
    }

    setIsCartModalOpen(true);
  };

  const removeItemFromHandler = async (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });

    // Store the updated cart in Firebase
    try {
      await axios.put(url, { items: cartState.items }); // Send the cart data in the request body
    } catch (error) {
      console.error("Error storing cart in Firebase:", error);
    }
  };

  useEffect(() => {
    // Fetch the cart data from Firebase when the component mounts
    const fetchCartData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data && response.data.items) {
          dispatchCartAction({ type: "SET_CART", items: response.data.items });
        }
      } catch (error) {
        console.error("Error fetching cart data from Firebase:", error);
      }
    };

    fetchCartData();
  }, []);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
    isCartModalOpen: isCartModalOpen,
    setIsCartModalOpen: setIsCartModalOpen,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

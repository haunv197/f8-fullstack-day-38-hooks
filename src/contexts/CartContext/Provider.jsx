import { useEffect, useReducer } from "react";
import reducer from "@/pages/ShoppingCart/reducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "@/pages/ShoppingCart/consts";
import CartContext from "./Context";

export default function Provider({ children }) {
  const [cart, dispatch] = useReducer(
    reducer,
    JSON.parse(
      localStorage.getItem("cart") ||
        JSON.stringify({
          items: [],
          totalPrice: 0,
          totalQuantity: 0,
        })
    )
  );

  console.log("cart", cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        productId,
      },
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: {
        productId,
        quantity,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

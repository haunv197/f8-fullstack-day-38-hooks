import { useState } from "react";
import { CartContext } from "./Context";

export default function Provider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  const values = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

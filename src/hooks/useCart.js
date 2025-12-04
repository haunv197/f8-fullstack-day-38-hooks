import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("You are using other than CartProvider");
  }
  return context;
}

export default useCart;

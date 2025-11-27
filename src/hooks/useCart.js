import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("Bạn đang dùng ngoài CartProvider");
  }
  return context;
}

export default useCart;

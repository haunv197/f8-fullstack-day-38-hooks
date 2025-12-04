import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useCart from "@/hooks/useCart";
import productService from "@/services/productService";
import { useEffect, useState } from "react";

const ADD_TO_CART_BTN = "Add to Cart";
function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    productService.getProducts().then((response) => {
      setProducts(response.data.items);
    });
  }, []);

  return (
    <div>
      <div className="mx-auto p-5">
        <h1 className="mb-5 font-bold text-2xl">ShoppingCart</h1>

        <div className="flex flex-wrap -mx-2">
          {products.map((product) => {
            const { thumbnail, title, price, id } = product;
            const newProduct = { thumbnail, title, price, id };
            return (
              <div key={id} className="w-1/2 lg:w-1/4 px-2 mb-4">
                <div className="flex flex-col gap-2">
                  <div className="aspect-square">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold uppercase">{title}</h3>
                  <p className="text-red-500">{price}đ</p>
                  <Button onClick={() => addToCart(newProduct)}>
                    {ADD_TO_CART_BTN}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

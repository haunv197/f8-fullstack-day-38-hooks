import useCart from "@/hooks/useCart";
import { DECREMENT, INCREMENT } from "@/pages/ShoppingCart/consts";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart?.totalPrice ?? 0;
  const countCart = cart.items?.length;

  const handleUpdateQuantity = (e, id, quantity) => {
    if (!id || !quantity) {
      return;
    }
    const type = e.target.dataset.va;

    let newQuantity = type === INCREMENT ? quantity + 1 : quantity - 1;
    if (newQuantity === 0) {
      return;
    }

    updateQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <HoverCard>
      <HoverCardTrigger className="flex">
        <button className="relative mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          {cart.totalQuantity > 0 && (
            <Badge className="absolute top-0 -right-3" variant="destructive">
              {cart.totalQuantity}
            </Badge>
          )}
        </button>
      </HoverCardTrigger>

      <HoverCardContent
        sideOffset={-5}
        className={`max-w-full ${countCart ? "w-160" : ""}`}
      >
        {countCart > 0 ? (
          <div className="w-150 flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              {cart.items.map((item) => {
                const { thumbnail, title, price, quantity, id } = item;
                return (
                  <div
                    className="flex items-center gap-3 justify-between"
                    key={id}
                  >
                    <div className="flex gap-2 items-center ">
                      <div className="w-15 h-10 flex-none">
                        <img
                          src={thumbnail}
                          alt={title}
                          className="object-cover w-full max-h-full"
                        />
                      </div>
                      <div className="w-50 font-bold flex-none">{title}</div>
                    </div>
                    <span>{price}</span>
                    <div className="flex gap-3">
                      <div className="flex gap-1">
                        <Button
                          variant="outline"
                          data-va={INCREMENT}
                          onClick={(e) => handleUpdateQuantity(e, id, quantity)}
                        >
                          +
                        </Button>
                        <input
                          type="number"
                          readOnly
                          value={quantity}
                          className="w-10 text-right"
                        />
                        <Button
                          variant="outline"
                          data-va={DECREMENT}
                          disabled={quantity === 1}
                          onClick={(e) => handleUpdateQuantity(e, id, quantity)}
                        >
                          -
                        </Button>
                      </div>

                      <Button onClick={() => handleRemoveFromCart(id)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-right font-bold">
              Total:
              <span className="text-red-600"> {totalPrice}</span>
            </div>
            <div className="text-right">
              <Button variant="outline" onClick={handleClearCart}>
                Clear cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-right">Your cart is empty.</div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

export default Cart;

import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import { DECREASE, INCREASE, JUMP } from "./consts";

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  // dispatch: là 1 hàm khi gọi sẽ nhận 1 action
  // Khi gọi dispatch() thì reducer sẽ được gọi

  console.log("count", count);
  console.log("UseReducer");

  return (
    <div>
      <h1>Use Reducer</h1>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => dispatch({ type: INCREASE })}>
          Increase
        </Button>
        <Button variant="outline" onClick={() => dispatch({ type: DECREASE })}>
          Decrease
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch({ type: JUMP, payload: 5 })}
        >
          Jump
        </Button>
      </div>
    </div>
  );
}

function TestTheme() {
  const { theme, toggle } = useTheme();

  const isLight = theme === "light";
  useEffect(() => {
    document.body.classList.toggle("light", isLight);
  }, [theme]);

  console.log("TestTheme - theme", theme);

  return (
    <div
      style={{
        backgroundColor: isLight ? "#fff" : "#333",
      }}
    >
      <h2
        style={{
          color: isLight ? "#333" : "#fff",
        }}
      >
        Test Theme
      </h2>

      <Button variant="outline" onClick={toggle}>
        {isLight ? "Dark" : "Light"}
      </Button>
    </div>
  );
}
function ShoppingCart() {
  console.log("ShoppingCart");

  return (
    <div className="mx-auto p-5">
      <h1>ShoppingCart</h1>
      <UseReducer />
      <TestTheme />
    </div>
  );
}

export default ShoppingCart;

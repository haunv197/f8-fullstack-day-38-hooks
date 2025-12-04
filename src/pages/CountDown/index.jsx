import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const INIT_COUNTDOWN = 10;
function CountDown() {
  const [count, setCount] = useState(INIT_COUNTDOWN);
  const [toggleCountDown, seToggleCountDown] = useState(false);

  useEffect(() => {
    const countDownId = setInterval(() => {
      setCount((count) => {
        if (count > 0) return count - 1;

        clearInterval(countDownId);
        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(countDownId);
    };
  }, [toggleCountDown]);

  const handleResetCountDown = () => {
    seToggleCountDown((prev) => !prev);
    setCount(INIT_COUNTDOWN);
  };
  return (
    <div className="p-3 mx-auto text-center">
      <h3>Count is {count}</h3>
      <Button className="mt-3" onClick={handleResetCountDown}>
        Reset
      </Button>
    </div>
  );
}

export default CountDown;

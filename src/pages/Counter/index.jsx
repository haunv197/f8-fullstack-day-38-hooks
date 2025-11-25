import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

const CounterA = memo(({ value, onIncrease }) => {
  console.log("countA", value);

  return (
    <div>
      <h2>Count A is {value}</h2>
      <div className="mt-3">
        <Button variant="outline" onClick={onIncrease}>
          Increase Count A
        </Button>
      </div>
    </div>
  );
});

const CounterB = memo(({ value, onIncrease }) => {
  console.log("countB", value);

  return (
    <div>
      <h2>Count B is {value}</h2>
      <div className="mt-3">
        <Button variant="outline" onClick={onIncrease}>
          Increase Count B
        </Button>
      </div>
    </div>
  );
});

function Counter() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleIncreaseA = useCallback(() => {
    setCountA(countA + 1);
  }, [countA]);
  const handleIncreaseB = useCallback(() => {
    setCountB(countB + 1);
  }, [countB]);

  return (
    <div className="flex flex-wrap gap-10 p-4">
      <CounterA value={countA} onIncrease={handleIncreaseA} />
      <CounterB value={countB} onIncrease={handleIncreaseB} />
    </div>
  );
}

export default Counter;

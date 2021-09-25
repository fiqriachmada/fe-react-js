import { useState } from "react";
import { Col } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Col className="mt-5">
      <h1>{count}</h1>
      <button onClick={increment}></button>
      <button onClick={decrement}></button>
    </Col>
  );
};

export default Counter;

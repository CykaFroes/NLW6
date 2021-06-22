import { useState } from "react";

type ButtonProps = {
  text?: string;
};

export const Button = (props: ButtonProps) => {
  const [counter, setCounter] = useState(0);

  const incriment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return <div className="button" onClick={incriment}>{counter}</div>;
};

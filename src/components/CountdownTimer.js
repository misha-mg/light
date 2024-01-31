import { useEffect, useState } from "react";

const CountdownTimer = (props) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    let rep = 0;
    setInterval(() => {
      rep += 1;
      if (rep < 3) {
        setCount((count) => count - 1);
      }
    }, 1000);
  }, []);
  return (
    <div className="timer">
      <div className="timer-container">
        <p>Hand identified, keep it in the frame until the end of the timer</p>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

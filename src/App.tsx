import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BetList } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-5">
      <BetList />
    </div>
  );
}

export default App;

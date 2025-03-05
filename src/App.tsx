// import { useState } from "react";
import "./App.css";
import { GraphForm } from "./components/graph/graph";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        Тык {count}
      </button> */}

      <GraphForm />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./Profile"; // ✅ import Profile component
import Todo from "./components/Todo"; // ✅ import Todo component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* ✅ Profile component */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Profile Component Example</h2>
        <Profile name="Wasif Waheed" age={21} />
      </div>

      {/* ✅ Todo component */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Todo Component Example</h2>
        <Todo />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

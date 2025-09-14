import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./Profile"; // ✅ Profile component
import Todo from "./components/Todo"; // ✅ Todo component
import fetchClient from "./utils/fetchClient"; // ✅ matches fetchClient.ts

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  // ✅ FetchClient demo with dedupe
  useEffect(() => {
    const runDemo = async () => {
      try {
        console.log("🚀 Starting dedupe demo...");

        // Fire multiple requests for the same URL
        const [a, b, c] = await Promise.all([
          fetchClient("https://jsonplaceholder.typicode.com/todos/1"),
          fetchClient("https://jsonplaceholder.typicode.com/todos/1"),
          fetchClient("https://jsonplaceholder.typicode.com/todos/1"),
        ]);

        console.log("✅ All responses received (deduped into one request).");
        console.log("Responses are the same:", a, b, c);

        setData(a); // display one result
      } catch (err) {
        console.error("❌ Fetch failed:", err);
      }
    };
    runDemo();
  }, []);

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

      {/* ✅ FetchClient demo */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Fetch Client Demo</h2>
        <p>Check console for dedupe logs 🚀</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

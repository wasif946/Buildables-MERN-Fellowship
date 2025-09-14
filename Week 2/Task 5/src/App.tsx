// src/App.tsx
import Button from "./components/Button";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 p-6">
      <h1 className="text-2xl font-bold">Component Library Demo</h1>

      <Card title="Example Card">
        <p>This is a card component with tokens applied.</p>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>API URL Configuration</h1>
      <p>Current API URL: {import.meta.env.VITE_API_URL}</p>
    </div>
  );
}

export default App;

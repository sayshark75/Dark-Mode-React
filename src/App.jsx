import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { ThemeContext } from "./Contexts/ThemeProvider";
import { useContext } from "react";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        background: theme ? "white" : "#303030",
        color: theme ? "black" : "white",
        transition:"1000ms"
      }}
    >
      <Sidebar />
      <div className="mainView">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

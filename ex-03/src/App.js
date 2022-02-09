import "./App.css";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;

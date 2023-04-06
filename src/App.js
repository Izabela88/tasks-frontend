import TileList from "./components/TileList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <TileList />
        <div className="container mt-5"></div>
      </div>
    </GlobalProvider>
  );
}

export default App;

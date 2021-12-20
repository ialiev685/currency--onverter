import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage, CurrenciesPage } from "./views";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CurrenciesPage />} />
      </Routes>
    </div>
  );
}

export default App;

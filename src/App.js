import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage, CurrenciesPage } from "./views";
import { Conteiner } from "./components/Conteiner";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <section>
        <Conteiner>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/courses" element={<CurrenciesPage />} />
          </Routes>
        </Conteiner>
      </section>
    </div>
  );
}

export default App;

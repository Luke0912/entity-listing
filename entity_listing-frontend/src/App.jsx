import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Mainheader } from "./components/MainHeader";
import { Welcome } from "./pages/Welcome";
import { Section } from "./pages/Section";
import { Details } from "./pages/Details";
function App() {
  return (
    <div className="App">
      <Mainheader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/section" element={<Section />}></Route>
          <Route path="/section/:category" element={<Details />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

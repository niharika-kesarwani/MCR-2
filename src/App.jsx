import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Routes className="grow">
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;

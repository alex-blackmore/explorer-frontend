import Home from "./components/Home.tsx";
import LoginHandler from "./components/LoginHandler.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/callback" element={<LoginHandler />} />
    </Routes>
  );
}

export default App;

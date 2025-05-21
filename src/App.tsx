// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import ResultsSummary from "./pages/ResultsSummary";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResultsSummary />} />
        <Route path="/next" element={<div>Next page(Placeholder)</div>} />
      </Routes>
    </Router>
  );
}

export default App;

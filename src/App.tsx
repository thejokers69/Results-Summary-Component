// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import Layout from "./Layout";
import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

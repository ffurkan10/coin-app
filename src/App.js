import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import "./styles/style.scss";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinContent from "./components/coinContent/CoinContent";

const App = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoin(res.data);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__list">
          <Routes>
            <Route path="/" element={<Home coin={coin} setcoin={setCoin} />} />
            <Route path="/coins/:id" element={<CoinContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

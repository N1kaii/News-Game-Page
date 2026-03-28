import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import GameCard from "./components/GameCard/GameCard";
import NewsCard from "./components/NewsCard/NewsCard";

export default function App() {
  const [games, setGames] = useState([]);
  const [news, setNews] = useState([]);
  const [currentContentKey, setCurrentContentKey] = useState("games");

  const handleNavClick = (key) => {
    setCurrentContentKey(key);
  };

  useEffect(() => {
    fetch("./data/games.json")
      .then((r) => r.json())
      .then((data) => setGames(data));

    fetch("./data/news.json")
      .then((r) => r.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="app">
      <Header />
      <Navbar currentKey={currentContentKey} onNavClick={handleNavClick} />

      <main className="main">
        <div className="container">
          <h2 className="pageTitle">
            {currentContentKey === "games" ? "Игры" : "Новости"}
          </h2>

          {currentContentKey === "games" ? (
            <div className="list">
              {games.map((g, i) => (
                <GameCard key={i} game={g} />
              ))}
            </div>
          ) : (
            <div className="list">
              {news.map((n, i) => (
                <NewsCard key={i} item={n} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="footer">© GameSpy</footer>
    </div>
  );
}
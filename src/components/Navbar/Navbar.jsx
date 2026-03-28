import "./Navbar.css";

function Navbar({ currentKey, onNavClick }) {
  return (
    <nav className="nav">
      <button
        className={currentKey === "games" ? "btn active" : "btn"}
        onClick={() => onNavClick("games")}
      >
        Игры
      </button>

      <button
        className={currentKey === "news" ? "btn active" : "btn"}
        onClick={() => onNavClick("news")}
      >
        Новости
      </button>
    </nav>
  );
}

export default Navbar
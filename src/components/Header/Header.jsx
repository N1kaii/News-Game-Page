import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="headerBox">
        <div className="logo">🎮</div>
        <div>
          <div className="title">GameSpy</div>
          <div className="subTitle">Следим за новинками игр</div>
        </div>
      </div>
    </header>
  );
}

export default Header
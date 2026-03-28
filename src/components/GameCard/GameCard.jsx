import "./GameCard.css";

export default function GameCard({ game }) {
  const img1 = `/data/images/${game.image1}`
  const img2 = `/data/images/${game.image2}`
  const img3 = `/data/images/${game.image3}`
  const img4 = `/data/images/${game.image4}`

  return (
    <div className="gameCard">
      <img className="mainImg" src={img1} alt={game.title} />

      <div className="gameContent">
        <h3 className="title">{game.title}</h3>

        <div className="subText">
          <p>{game.developer} • {game.releseYear}</p>
        </div>

        <div className="info">
          <p><b>Жанр:</b> {game.gnere}</p>
        </div>

        <p className="desc">{game.discription}</p>

        <div className="shotsTitle">Скриншоты:</div>
        <img className="shotImg" src={img2} alt="screenshot" />
        <img className="shotImg" src={img3} alt="screenshot" />
        <img className="shotImg" src={img4} alt="screenshot" />
      </div>
    </div>
  );
}
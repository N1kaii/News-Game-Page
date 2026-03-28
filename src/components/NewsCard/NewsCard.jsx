import "./NewsCard.css";

export default function NewsCard({ item }) {
  return (
    <div className="newsCard">
      <img className="newsImg" src={item.image} alt={item.title} />

      <div className="newsContent">
        <div className="newsDate">{item.publication}</div>
        <h3 className="title">{item.title}</h3>
        <p className="newsText">{item.content}</p>
      </div>
    </div>
  );
}
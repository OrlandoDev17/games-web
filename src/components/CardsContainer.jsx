import Card from "./Card";
import "../styles/CardsContainer.css";

export default function CardsContainer({ games }) {
  return (
    <div className="catalogue-grid">
      {games.map(
        ({ id, name, image, rating, developers, genre, year, platform }) => (
          <Card
            key={id}
            image={image}
            rating={rating}
            name={name}
            developers={developers}
            genre={genre}
            year={year}
            platform={platform}
          />
        )
      )}
    </div>
  );
}

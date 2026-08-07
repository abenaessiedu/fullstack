import { Link } from "react-router-dom"; 

export default function BrandCard({ _id, author, name, image, summary }) {
  return (
    <div className="BrandCard">
      <div className="image">
        <Link to={`/brands/${_id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>

      <div className="texts">
        <h2>{name}</h2>
        <p className="author">Author: {author}</p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
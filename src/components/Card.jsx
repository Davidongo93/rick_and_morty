import './Card.css';
export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className="card">
      <button onClick={onClose}>X</button>
      <div className="image-container">
        <img src={image} alt="" className="profile-image" />
      </div>
      <h2 className="name">{name}</h2>
      <h2 className="species">{species}</h2>
      <h2 className="gender">{gender}</h2>
    </div>
  );
}

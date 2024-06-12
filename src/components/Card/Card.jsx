import C_ring from "../../assets/C_ring.jpeg"
import "./Card.css"
const Card = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={C_ring} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Moon Earring</h5>
        <p className="card-text">
          $100
        </p>
        <a href="#" className="btn brown text-white">Add To Cart</a>
      </div>
    </div>
  );
};

export default Card;

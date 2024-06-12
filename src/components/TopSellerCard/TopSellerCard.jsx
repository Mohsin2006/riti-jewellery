import "./Top.css"
import speaker_ring from "../../assets/speaker_ring.jpeg"
const TopSellerCard = () => {
 return (
        <div className="card" style={{ width: '18rem' }}>
          <img src={speaker_ring} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">C Earring</h5>
            <p className="card-text">
              $100
            </p>
          </div>
        </div>
      );
}

export default TopSellerCard

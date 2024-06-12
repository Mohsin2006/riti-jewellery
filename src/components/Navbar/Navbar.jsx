import "./Navbar.css";
import logos from "../../assets/logos.jpg";
import phoneicon from "../../assets/phone-icon.png";
import account from "../../assets/account.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/account");
  };

  return (
    <div className='navbar'>
      <img src={logos} alt="Logo" />

      <div className="centers">
        <input type="text" placeholder='Search for Gold Ornaments' />
      </div>
      <div className="left">
        <ul>
          <Link to="/" className='k'>
            <img src={account} alt="Account" />
            <li>Home</li>
          </Link>
          {token?(<Link to="/contact" className='k'>
            <img src={phoneicon} alt="Contact" />
            <li>Contact</li>
          </Link>):<></>}
          
          {token
          ?(<Link to="/cart" className='k'>
          <img src={cart_icon} alt="Cart" />
          <li>Cart</li>
        </Link>):<></>}
          {token ? (
            <button  onClick={handleLogout} className='btn bg-transparent mr-2' style={{width:"100px",color:"white"}}>
              <li>Logout</li>
            </button>
          ) : (
            <Link to="/account" className='k'>
              <img src={account} alt="Account" />
              <li>Account</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import{ useState } from 'react';
import "./Account.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [current, setCurrent] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  let url = "http://localhost:4000";

  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = current === "login" ? `${url}/api/user/login` : `${url}/api/user/register`;

    let obj = {
      name: current === "login" ? undefined : name,
      email: email,
      password: password,
    };

    if (current !== "login" && password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(newUrl, obj);
      console.log(res);
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        {
          current==="login"?(navigate("/")):(navigate("/account"))
        }// Navigate to the desired route after login/signup
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
    setName("")
    setCpassword("")
    setEmail("")
    setPassword("")
  };

  return (
    <div className='loginsignup d-flex flex-column justify-content-center align-items-center '>
      <h1>{current === "login" ? "Login" : "Signup"}</h1>
      <form onSubmit={onLogin}>
        {
          current === "signup" && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
                className="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
          )
        }
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        {
          current === "signup" && (
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                onChange={(e) => setCpassword(e.target.value)}
                type="password"
                value={cpassword}
                required
                className="form-control"
                id="cpassword"
                placeholder="Confirm Password"
              />
            </div>
          )
        }
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" className="mb-5 mt-5 btn brown text-white">{current === "login" ? "Login" : "Signup"}</button>
        {
          current === "login"
            ? <a onClick={() => setCurrent("signup")}>Dont have an account? <span className='text-primary'>Click to Sign Up</span></a>
            : <a onClick={() => setCurrent("login")}>Have an account? <span className='text-primary'>Click to Login</span></a>
        }
      </form>
    </div>
  );
};

export default Account;

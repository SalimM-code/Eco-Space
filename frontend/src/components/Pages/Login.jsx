
// import styles from "../../styles.css"
import {useNavigate} from 'react-router-dom';
import { useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie'
import "./login.css"



function LogIn(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', {
      email: email,
      password: password
    }).then(res => {
      const user = res.data
      localStorage.setItem('username', user.name);
      console.log(user);

      navigate('/Dashboard')

    }).catch((error) => {
      console.error("error -->", error)
    })
  }
  return(
  <div className="container">
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="header">Please log in</h1> 
          <input
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button">Log In</button>
      </form>
    </div>
  </div>


  );
};

export default LogIn;
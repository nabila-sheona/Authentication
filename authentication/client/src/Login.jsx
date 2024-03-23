import  { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  // State variables to store user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
      if(result.data==="success"){
      navigate('/landingpage')
      }
    })
    .catch(err=> console.log(err))
  };

  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <br></br> 
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br></br> 
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br></br> 
        <button type="submit">Login</button>
      </form>
      <br></br> 

      <p> Already have an account? </p>

      <Link to="/signup">Signup</Link>

      <br></br>

      <br></br>

      <Link to="/home" className="btn btn-primary mr-2">Back to home</Link>

    </div>
  );
}

export default Login;

import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  };

  
//sheona-nabila

  return (
    <div className="bg-white p-3 rounded w-25">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="email"> Username: </label>
      
          <input
            type="text"
            placeholder="enter name"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            onChange={(e)=>setName(e.target.value)}
        
          />
        </div>

        <br></br> 

        <div className="mb-3">

        <label htmlFor="email"> Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <br></br> 

        <div>
          <label htmlFor="email"> Password:</label>
          <input
            type="password"
            placeholder="Enter Email"
            autoComplete="off"
            name="password"
            className="form-control rounded-0"
            onChange={(e)=>setPassword(e.target.value)}
            
          />
        </div>
        <br></br> 
        <button type="submit">Signup</button>
      </form>

      <br></br> 
      <p> ALready have an account? </p>
     
      <Link to="/login">Login</Link>

      <br></br>
      <br></br>

<Link to="/home" className="btn btn-primary mr-2">Back to home</Link>
    
    </div>
  );
}

export default Signup;

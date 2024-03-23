
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Website!</h1>
      <p>This is a basic homepage for our website.</p>
      <p>Feel free to explore!</p>
      <div>
        <Link to="/signup" className="btn btn-primary mr-2">Signup</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default Home;

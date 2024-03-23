
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function LandingPage({ username }) {
    

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is the landing page of our application.</p>
      <p>Here you can access the main features of our application.</p>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Go to Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
          <div>
        <Link to="/home" className="btn btn-primary mr-2">Logout</Link>
      
      </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;

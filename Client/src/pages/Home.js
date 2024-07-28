import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/view-questions">View Questions</Link></li>
          <li><Link to="/add-question">Add Question</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

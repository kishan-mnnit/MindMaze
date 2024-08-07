  import React from 'react';
  import { Link } from 'react-router-dom';

  const Home = () => {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin/view-questions">View Questions</Link>
            </li>
            <li>
              <Link to="/admin/add-questions">Add Question</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  export default Home;

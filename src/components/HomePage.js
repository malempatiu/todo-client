import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
   return (
      <div className="container text-center homepage-cont">
         <h1 className="text-white">Welcome to To-Do App</h1>
         <Link to="/gettodos" className="btn btn-warning">See Todo's!</Link>
      </div>
   );
};

export default HomePage;
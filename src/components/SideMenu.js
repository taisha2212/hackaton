import React from 'react';
import { Link } from 'react-router-dom';


const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <Link to="/choose-sector">Choose your sector</Link>
        </li>
        <li>
          <Link to="/connect-database">Connect your database</Link>
        </li>
        <li>
          <Link to="/suspicious-users">Suspicious users</Link>
        </li>
        <li>
          <Link to="/your-ecosystem">Your ecosystem</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
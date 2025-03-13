import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  // Sample links array
  const links = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: '/about', text: 'About' },
    { id: 3, url: '/contact', text: 'Contact' },
    { id: 4, url: '/register', text: 'Register' }, // Updated URL to match the route
  ];

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              My Logo
            </Link>
          </h3> {/* Replace with your logo or brand name */}
        </div>

        <ul className='links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} className='nav-link'>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
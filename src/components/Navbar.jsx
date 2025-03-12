import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // Sample links array
  const links = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: '/about', text: 'About' },
    { id: 3, url: '/contact', text: 'Contact' },
  ];

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>My Logo</h3> {/* Replace with your logo or brand name */}
        </div>

        <ul className='links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
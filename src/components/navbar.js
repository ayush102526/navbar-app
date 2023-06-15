import React from 'react';
import './Navbar.css'; // Import the CSS file
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              isActive
                ? 'active'
                : isPending
                  ? 'pending'
                  : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive, isPending }) =>
              isActive
                ? 'active'
                : isPending
                  ? 'pending'
                  : ''
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <NavLink
            to={'/login'}
            className={({ isActive, isPending }) =>
              isActive
                ? 'active'
                : isPending
                  ? 'pending'
                  : ''
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/registration'}
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

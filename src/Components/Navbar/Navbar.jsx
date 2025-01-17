
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 fixed top-0 w-full z-50 shadow-md">
    <div className="container-fluid mx-auto p-8">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-white text-2xl font-bold uppercase">
          Start Framework
        </NavLink>
        <button
          onClick={toggleMenu}
          className="text-white lg:hidden px-3 py-2 border rounded-md"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white uppercase font-semibold px-2 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-[#1ABC9C]' : ''
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-white uppercase font-semibold px-2 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-[#1ABC9C]' : ''
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white uppercase font-semibold px-2 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-[#1ABC9C]' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;


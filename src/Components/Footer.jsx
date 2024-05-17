import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Team V</p>
        </div>
        <div>
          <Link to="/about" className="text-white hover:text-gray-300 mr-4">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

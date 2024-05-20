import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Team V</p>
        </div>
        <div>
          <a
            className=" block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            href="https://www.readersdigest.ca/travel/world/new-york-city-filming-locations/"
            target="/blank"
          >
            More
          </a>
        </div>
        {/* <div>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

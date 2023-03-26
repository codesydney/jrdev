import { useState } from 'react';
import logo from './resources/codesydenylogo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="w-full h-20 bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center border-2">
              <img className="h-8 w-auto" src={logo} alt="Code.Sydeny Logo" />
              <div className="flex flex-col justify-end items-center border-2">
                <p className="font-bold text-lg mb-0">JrDEV</p>
                <p className="border-2 text-sm ">By Code.Sydney</p>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="flex-shrink-0">
              <Link
                to="/signin"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Sign In
              </Link>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Link
                to="/"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3">
          <a
            href="/signin"
            className="block font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Sign In
          </a>
          <a
            href="/"
            className="mt-1 block font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

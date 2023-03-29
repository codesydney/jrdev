import { useState, useEffect } from 'react';
import logo from './resources/codesydenylogo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={` ${
        isScrolled
          ? 'bg-secondary md:w-[80%] mx-auto sm:rounded-2xl shadow-2xl text-white shadow-bg-300/50'
          : 'bg-bg-100 text-black md:w-full mx-auto'
      }  h-16 sticky top-0 left-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center ">
              <img className="h-8 w-auto" src={logo} alt="Code.Sydeny Logo" />
              <div className="flex flex-col justify-end items-center ">
                <p className="font-bold text-lg mb-0">JrDEV</p>
                <p className=" text-sm ">By Code.Sydney</p>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 m-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-bg-200 focus:text-gray-500 transition duration-150 ease-in-out"
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
                className="font-medium hover:text-text-100 transition duration-150 ease-in-out"
              >
                Sign In
              </Link>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Link
                to="/signup"
                className="font-medium hover:text-text-100 transition duration-150 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
            <div className="ml-4 flex-shrink-0">
              <Link
                to="/"
                className="font-medium hover:text-text-100 transition duration-150 ease-in-out"
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
        } sm:hidden w-full right-0 absolute h-60 bg-gray-100 border-t border-gray-200`}
      >
        <div className="px-8 pt-2 h-full pb-3 gap-5 flex flex-col justify-start bg-bg-200 items-start  my-auto">
          <Link
            to="/signin"
            className="block font-medium text-gray-500 hover:text-text-100 transition duration-150 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block font-medium text-gray-500 hover:text-text-100 transition duration-150 ease-in-out"
          >
            Sign Up
          </Link>
          <Link
            to="/"
            className="mt-1 block font-medium text-gray-500 hover:text-text-100 transition duration-150 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { useState } from "react";
import { navLinks } from "../constants/index.js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({id, href, name}) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl 
                hover:text-white transition-colors"
          >
            Bhargav Nama
          </a>

          <button
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            className="text-neutral-400 hover:text-white
          focus:outline-none flex sm:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5"> 
              <NavItems />
            </nav>  
      </div>
    </header>
  );
};

export default Navbar;

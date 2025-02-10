// // src/components/Navbar.js
// import React, { useState } from 'react';
// import './Navbar.css'; // Custom CSS file
// import { FaMoon, FaSun } from 'react-icons/fa';
// const Navbar = ({runCode,toggleTheme,isDarkMode}) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   return (
//     <header>
//       <nav className="navbar">
     
//         <div className="logo">Logo</div>
//        <div className="right">
         

//           <div className='controls'>
//                     <button className='button' onClick={runCode}>
//                       Run
//                     </button>
//                     <button className='theme-button' onClick={toggleTheme}>
//                       {isDarkMode ? (
//                         <FaSun size={20} color='yellow' />
//                       ) : (
//                         <FaMoon size={20} color='gray' />
//                       )}
//                     </button>
//                   </div>
//         </div>
//       </nav>
//      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Custom CSS file
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ runCode, toggleTheme, isDarkMode, resetCode, addBoilerplate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="right">
          <div className="controls">
            <button className="button" onClick={runCode}>
              Run
            </button>
            <button className="button" onClick={resetCode}>
              Reset
            </button>
            <button className="button" onClick={addBoilerplate}>
              Boilerplate
            </button>
            <button className="theme-button" onClick={toggleTheme}>
              {isDarkMode ? (
                <FaSun size={20} color="yellow" />
              ) : (
                <FaMoon size={20} color="gray" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;

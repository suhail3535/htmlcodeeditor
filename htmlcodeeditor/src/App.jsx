import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';

function HtmlCodeEditor() {
  const [htmlCode, setHtmlCode] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const runCode = () => {
    const outputFrame = document.getElementById('output');
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(htmlCode);
    outputFrame.contentDocument.close();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='main-container'>
      <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className='controls'>
          <button className='button' onClick={runCode}>
            Run
          </button>
          <button className='theme-button' onClick={toggleTheme}>
            {isDarkMode ? (
              <FaSun size={20} color='yellow' />
            ) : (
              <FaMoon size={20} color='gray' />
            )}
          </button>
        </div>
        <div className='editor-container'>
          <textarea
            id='htmlCode'
            placeholder='Write your HTML code here...'
            value={htmlCode}
            onChange={e => setHtmlCode(e.target.value)}
            className='textarea'
          ></textarea>
          <iframe id='output' className='iframe'></iframe>
        </div>
      </div>
    </div>
  );
}

export default HtmlCodeEditor;

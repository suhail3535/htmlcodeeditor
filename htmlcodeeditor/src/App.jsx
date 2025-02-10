// import React, { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import './App.css';
// import Navbar from './components/Navbar';

// function HtmlCodeEditor() {
//   const [htmlCode, setHtmlCode] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const runCode = () => {
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write(htmlCode);
//     outputFrame.contentDocument.close();
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className='main-container'>
//       <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} runCode={runCode}/>
//       <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
//         <div className='editor-container'>
//           <textarea
//             id='htmlCode'
//             placeholder='Write your HTML code here...'
//             value={htmlCode}
//             onChange={e => setHtmlCode(e.target.value)}
//             className='textarea'
//           ></textarea>
//           <iframe id='output' className='iframe'></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HtmlCodeEditor;


// src/HtmlCodeEditor.js
// import React, { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import './App.css';
// import Navbar from './components/Navbar';
// import Boilerplate from './components/BoilerPlate';

// function HtmlCodeEditor() {
//   const [htmlCode, setHtmlCode] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const runCode = () => {
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write(htmlCode);
//     outputFrame.contentDocument.close();
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const resetCode = () => {
//     setHtmlCode(''); // Clear the editor content
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write(''); // Clear the iframe content
//     outputFrame.contentDocument.close();
//   };

//   const addBoilerplate = () => {
//     const boilerplate = Boilerplate(); // Get the HTML boilerplate from the component
//     setHtmlCode(boilerplate);
//   };

//   return (
//     <div className="main-container">
//       <Navbar
//         isDarkMode={isDarkMode}
//         toggleTheme={toggleTheme}
//         runCode={runCode}
//         resetCode={resetCode}
//         addBoilerplate={addBoilerplate}
//       />
//       <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
//         <div className="editor-container">
//           <textarea
//             id="htmlCode"
//             placeholder="Write your HTML code here..."
//             value={htmlCode}
//             onChange={(e) => setHtmlCode(e.target.value)}
//             className="textarea"
//           ></textarea>
//           <iframe id="output" className="iframe"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HtmlCodeEditor;

// <================suggetion=========>


// import React, { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import './App.css';
// import Navbar from './components/Navbar';
// import Boilerplate from './components/BoilerPlate';

// function HtmlCodeEditor() {
//   const [htmlCode, setHtmlCode] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [cursorPos, setCursorPos] = useState(0);

//   const htmlTags = [
//     '<div></div>', '<p></p>', '<h1></h1>', '<h2></h2>', '<h3></h3>', '<h4></h4>', '<h5></h5>', '<h6></h6>',
//     '<span></span>', '<a></a>', '<ul></ul>', '<ol></ol>', '<li></li>', '<strong></strong>', '<em></em>',
//     '<img />', '<table></table>', '<tr></tr>', '<td></td>', '<th></th>', '<form></form>', '<input />',
//     '<button></button>', '<textarea></textarea>', '<select></select>', '<option></option>', '<label></label>',
//     '<meta />', '<link />', '<script></script>', '<style></style>', '<head></head>', '<body></body>',
//     '<html></html>', '<footer></footer>', '<header></header>', '<nav></nav>', '<section></section>', '<article></article>',
//     '<aside></aside>', '<main></main>', '<br />', '<hr />', '<figure></figure>', '<figcaption></figcaption>',
//     '<iframe></iframe>', '<canvas></canvas>', '<svg></svg>', '<audio></audio>', '<video></video>', '<source />',
//     '<embed />', '<object></object>', '<param />', '<noscript></noscript>'
//   ];

//   // Function to update the HTML code and cursor position
//   const handleChange = (e) => {
//     const code = e.target.value;
//     const position = e.target.selectionStart;
//     setHtmlCode(code);
//     setCursorPos(position);

//     const lastWord = code.slice(0, position).split(/\s/).pop();
//     if (lastWord.startsWith('<')) {
//       // Suggest tags that start with the typed characters
//       setSuggestions(htmlTags.filter(tag => tag.toLowerCase().includes(lastWord.toLowerCase())));
//     } else {
//       setSuggestions([]);
//     }
//   };

//   // Function to insert the selected suggestion at the cursor position
//   const insertSuggestion = (tag) => {
//     const code = htmlCode;
//     const position = cursorPos;
    
//     // Get the last typed word before the cursor
//     const before = code.slice(0, position).replace(/<\w*$/, ''); // Remove partial tag if present
//     const after = code.slice(position);
    
//     // Insert the tag at the cursor position, replacing the previous typed part
//     setHtmlCode(before + tag + after);
//     setSuggestions([]); // Hide suggestions after insertion

//     // Move the cursor after the closing tag
//     setCursorPos(before.length + tag.length);
//   };

//   const runCode = () => {
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write(htmlCode);
//     outputFrame.contentDocument.close();
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const resetCode = () => {
//     setHtmlCode('');
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write('');
//     outputFrame.contentDocument.close();
//   };

//   const addBoilerplate = () => {
//     const boilerplate = Boilerplate(); // Get the HTML boilerplate from the component
//     setHtmlCode(boilerplate);
//   };

//   return (
//     <div className="main-container">
//       <Navbar
//         isDarkMode={isDarkMode}
//         toggleTheme={toggleTheme}
//         runCode={runCode}
//         resetCode={resetCode}
//         addBoilerplate={addBoilerplate}
//       />
//       <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
//         <div className="editor-container">
//           <textarea
//             id="htmlCode"
//             placeholder="Write your HTML code here..."
//             value={htmlCode}
//             onChange={handleChange}
//             className="textarea"
//           />
//           {suggestions.length > 0 && (
//             <div className="suggestions">
//               {suggestions.map((tag, index) => (
//                 <div 
//                   key={index} 
//                   className="suggestion-item" 
//                   onClick={() => insertSuggestion(tag)}
//                 >
//                   {tag}
//                 </div>
//               ))}
//             </div>
//           )}
//           <iframe id="output" className="iframe"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default HtmlCodeEditor;

// import React, { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import './App.css';
// import Navbar from './components/Navbar';
// import Boilerplate from './components/BoilerPlate';

// function HtmlCodeEditor() {
//   const [htmlCode, setHtmlCode] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [cursorPos, setCursorPos] = useState(0);

//   const htmlTags = [
//     'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
//     'span', 'a', 'ul', 'ol', 'li', 'strong', 'em',
//     'img', 'table', 'tr', 'td', 'th', 'form', 'input',
//     'button', 'textarea', 'select', 'option', 'label',
//     'meta', 'link', 'script', 'style', 'head', 'body',
//     'html', 'footer', 'header', 'nav', 'section', 'article',
//     'aside', 'main', 'br', 'hr', 'figure', 'figcaption',
//     'iframe', 'canvas', 'svg', 'audio', 'video', 'source',
//     'embed', 'object', 'param', 'noscript'
//   ];

//   // Function to update the HTML code and cursor position
//   const handleChange = (e) => {
//     const code = e.target.value;
//     const position = e.target.selectionStart;
//     setHtmlCode(code);
//     setCursorPos(position);

//     const lastWord = code.slice(0, position).split(/\s/).pop();
//     if (lastWord.startsWith('<') || lastWord) {
//       // Suggest tags that start with the typed characters
//       setSuggestions(htmlTags.filter(tag => tag.toLowerCase().startsWith(lastWord.toLowerCase())));
//     } else {
//       setSuggestions([]);
//     }
//   };

//   // Function to insert the selected suggestion at the cursor position
//   const insertSuggestion = (tag) => {
//     const code = htmlCode;
//     const position = cursorPos;

//     // Determine whether to add the full tag or self-closing tag
//     const insertTag = tag === 'br' || tag === 'hr' || tag === 'img' || tag === 'input' || tag === 'meta' || tag === 'link' || tag === 'source' || tag === 'embed' || tag === 'param'
//       ? `<${tag} />` // Self-closing tags
//       : `<${tag}></${tag}>`; // Non-self-closing tags

//     // Get the part of code before the cursor position
//     const before = code.slice(0, position).replace(/<\w*$/, ''); // Remove the previous incomplete tag

//     // Get the part of code after the cursor position
//     const after = code.slice(position);

//     // Set the new code by replacing the incomplete part with the selected tag
//     setHtmlCode(before + insertTag + after);
//     setSuggestions([]); // Hide suggestions after insertion

//     // Move the cursor after the closing tag
//     setCursorPos(before.length + insertTag.length);
//   };

//   const runCode = () => {
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write(htmlCode);
//     outputFrame.contentDocument.close();
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const resetCode = () => {
//     setHtmlCode('');
//     const outputFrame = document.getElementById('output');
//     outputFrame.contentDocument.open();
//     outputFrame.contentDocument.write('');
//     outputFrame.contentDocument.close();
//   };

//   const addBoilerplate = () => {
//     const boilerplate = Boilerplate(); // Get the HTML boilerplate from the component
//     setHtmlCode(boilerplate);
//   };

//   return (
//     <div className="main-container">
//       <Navbar
//         isDarkMode={isDarkMode}
//         toggleTheme={toggleTheme}
//         runCode={runCode}
//         resetCode={resetCode}
//         addBoilerplate={addBoilerplate}
//       />
//       <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
//         <div className="editor-container">
//           <textarea
//             id="htmlCode"
//             placeholder="Write your HTML code here..."
//             value={htmlCode}
//             onChange={handleChange}
//             className="textarea"
//           />
//           {suggestions.length > 0 && (
//             <div className="suggestions">
//               {suggestions.map((tag, index) => (
//                 <div 
//                   key={index} 
//                   className="suggestion-item" 
//                   onClick={() => insertSuggestion(tag)}
//                 >
//                   &lt;{tag}&gt;&lt;/{tag}&gt; {/* Displaying the full tag */}
//                 </div>
//               ))}
//             </div>
//           )}
//           <iframe id="output" className="iframe"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HtmlCodeEditor;




// <---------------replace previos---------->

import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Navbar';
import Boilerplate from './components/BoilerPlate';

function HtmlCodeEditor() {
  const [htmlCode, setHtmlCode] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [cursorPos, setCursorPos] = useState(0);

  const htmlTags = [
    '<div></div>', '<p></p>', '<h1></h1>', '<h2></h2>', '<h3></h3>', '<h4></h4>', '<h5></h5>', '<h6></h6>',
    '<span></span>', '<a></a>', '<ul></ul>', '<ol></ol>', '<li></li>', '<strong></strong>', '<em></em>',
    '<img />', '<table></table>', '<tr></tr>', '<td></td>', '<th></th>', '<form></form>', '<input />',
    '<button></button>', '<textarea></textarea>', '<select></select>', '<option></option>', '<label></label>',
    '<meta />', '<link />', '<script></script>', '<style></style>', '<head></head>', '<body></body>',
    '<html></html>', '<footer></footer>', '<header></header>', '<nav></nav>', '<section></section>', '<article></article>',
    '<aside></aside>', '<main></main>', '<br />', '<hr />', '<figure></figure>', '<figcaption></figcaption>',
    '<iframe></iframe>', '<canvas></canvas>', '<svg></svg>', '<audio></audio>', '<video></video>', '<source />',
    '<embed />', '<object></object>', '<param />', '<noscript></noscript>'
  ];

  // Function to update the HTML code and cursor position
  const handleChange = (e) => {
    const code = e.target.value;
    const position = e.target.selectionStart;
    setHtmlCode(code);
    setCursorPos(position);

    const lastWord = code.slice(0, position).split(/\s/).pop();
    if (lastWord.startsWith('<')) {
      // Suggest tags that start with the typed characters
      setSuggestions(htmlTags.filter(tag => tag.toLowerCase().includes(lastWord.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  // Function to insert the selected suggestion at the cursor position
  const insertSuggestion = (tag) => {
    const code = htmlCode;
    const position = cursorPos;
    
    // Get the last typed word before the cursor
    const before = code.slice(0, position).replace(/<\w*$/, ''); // Remove partial tag if present
    const after = code.slice(position);
    
    // Insert the tag at the cursor position, replacing the previous typed part
    setHtmlCode(before + tag + after);
    setSuggestions([]); // Hide suggestions after insertion

    // Move the cursor after the closing tag
    setCursorPos(before.length + tag.length);
  };

  const runCode = () => {
    const outputFrame = document.getElementById('output');
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(htmlCode);
    outputFrame.contentDocument.close();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const resetCode = () => {
    setHtmlCode('');
    const outputFrame = document.getElementById('output');
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write('');
    outputFrame.contentDocument.close();
  };

  const addBoilerplate = () => {
    const boilerplate = Boilerplate(); // Get the HTML boilerplate from the component
    setHtmlCode(boilerplate);
  };

  return (
    <div className="main-container">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        runCode={runCode}
        resetCode={resetCode}
        addBoilerplate={addBoilerplate}
      />
      <div className={`body ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="editor-container">
          <textarea
            id="htmlCode"
            placeholder="Write your HTML code here..."
            value={htmlCode}
            onChange={handleChange}
            className="textarea"
          />
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((tag, index) => (
                <div 
                  key={index} 
                  className="suggestion-item" 
                  onClick={() => insertSuggestion(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <iframe id="output" className="iframe"></iframe>
        </div>
      </div>
    </div>
  );
}

export default HtmlCodeEditor;

// src/components/Boilerplate.js
import React from 'react';

const Boilerplate = () => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .welcome-heading {
            color: red;
            font-size: 20px;
            font-weight: 600;
        }
        .sub-heading {
            color: rgb(0, 255, 8);
            font-size: 20px;
            font-weight: 400;
        }
    </style>
</head>
<body>
    <h1 class="welcome-heading">Welcome to the First Project!</h1>
   <h2 class="sub-heading">Use more, learn more</h2>
</body>
</html>
  `;
};

export default Boilerplate;

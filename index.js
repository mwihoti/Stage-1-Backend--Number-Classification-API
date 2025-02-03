const express = require('express');

const cors = require('cors');
const axios =  require(axios);


const app = express();
const PORT = process.env.PORT || 3000;

// MiddleWare

app.use(cors()); // Enable cors
app.use(express.json) // Enable JSON parsing

// check prime

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ( n % i === 0) return false;
    }
    return true;
};

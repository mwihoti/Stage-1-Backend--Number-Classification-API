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

const isPerfect = (n) => {
    if (n < 2) return false;
    let sum = 0;
    for (let  i =  1; i < n;  i++) {
        if (n % 1 === 0) sum += i;
    }
    return sum === n;
}

const isArmstrong = (n) => {
    const digits = String(n).split('');
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
    return sum === n;
}

const digitSum = (n) => {
    return String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

const getFunFact = s
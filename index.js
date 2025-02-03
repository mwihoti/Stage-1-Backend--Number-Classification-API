const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Helper functions
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPerfect = (n) => {
  if (n < 2) return false;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
};

const isArmstrong = (n) => {
  const digits = String(n).split('');
  const numDigits = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
  return sum === n;
};

const digitSum = (n) => {
  return String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

const getFunFact = async (n) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${n}/math?json`);
    return response.data.text || 'No fun fact available.';
  } catch (error) {
    return 'No fun fact available.';
  }
};

// API Endpoint
app.get('/api/classify-number', async (req, res) => {
  const {number} = req.query;

  // Validate input
  if (!number || isNaN(number)) {
    return res.status(400).json({
      number: number || 'None',
      error: true,
    });
  }

  const num = parseInt(number);
  const properties = [];

  if (isArmstrong(num)) properties.push('armstrong');
  if (num % 2 === 0) properties.push('even');
  else properties.push('odd');

  const funFact = await getFunFact(num);

  const response = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties.join(", "),
    digit_sum: digitSum(num),
    fun_fact: funFact,
  };

  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
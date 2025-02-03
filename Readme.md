# Number Classifier API HNG task 1

Overview

The Number Classifier API is a simple RESTful API that takes a number as input and returns interesting mathematical properties about it, along with a fun fact.

## Features

Classifies numbers as prime, perfect, armstrong, even, or odd.

Computes the sum of digits.

Fetches a fun fact about the number from the Numbers API.

Supports CORS for cross-origin requests.

Returns responses in JSON format.

* Technology Stack

        . Node.js (Runtime)

        . Express.js (Web framework)

        . Axios (HTTP client for external API calls)

        . CORS (Cross-Origin Resource Sharing)

 * API Specification

Endpoint
``` bash
GET /api/classify-number?number=<integer>
```
Example Request
```bash
GET http://localhost:3000/api/classify-number?number=371

Example Success Response (200 OK)

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Example Error Response (400 Bad Request)

{
    "number": "alphabet",
    "error": true
}
```
Installation & Setup

Clone the repository:
```bash
git clone https://github.com/mwihoti/Stage-1-Backend--Number-Classification-API
cd Stage-1-Backend--Number-Classification-API
```
Install dependencies:
```bash
npm install
```
Start the server:
```bash

node index.js
```
The server runs on http://localhost:3000 by default.


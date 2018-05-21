"use strict";

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(cors());
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

app.get('/api/add', (req, res) => {
  var numbers = req.query.numbers.split(",");
  var sum = 0;
  for(var index in numbers){
    var number = parseInt(numbers[index]);
    sum += number;
  }
  var result = {
    "result" : sum,
    "isPrime" : isPrime(sum)
  }
  res.send(result)
});

app.get('/api/checkprime', (req, res) => {
  var number = req.query.number;

  var result = {
    "isPrime" : isPrime(number)
  }
  res.send(result)
});

app.listen(3000, () => console.log('Running on port 3000!'));

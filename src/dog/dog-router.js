'use strict';

const express = require('express');
const jsonBodyParser = express.json();
const dogRouter = express.Router();
const dog = require('./dogs');

dogRouter.get('/', (req, res, next) => {
  let dogs = [];

  if (!dog.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = dog.first;
    while (currNode !== null) {
      dogs.push(currNode.value);
      currNode = currNode.next;
    }

    res.status(200).json(dogs);
  }



});



module.exports = dogRouter;
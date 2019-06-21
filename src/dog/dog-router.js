'use strict';

const express = require('express');
const jsonBodyParser = express.json();
const dogRouter = express.Router();
const dog = require('./dogs');
const Users = require('../users/users');
const adopted = require('../adopted/adopted-service');

dogRouter.get('/', (req, res, next) => {
  let dogs = [];

  if (!dog.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = dog.first;
    if (!currNode) return res.status(200).json(dogs);
    console.log(currNode);
    return res.status(200).json(currNode);
  }

  dogRouter.delete('/', jsonBodyParser, (req, res, next) => {
    const deleteDog = dog.dequeue();
    const ad = Users.dequeue();
    adopted.enqueue(Object.assign(deleteDog, ad));

    res.status(200).json(ad.user);
  });

});



module.exports = dogRouter;
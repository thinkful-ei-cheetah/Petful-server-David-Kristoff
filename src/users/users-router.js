'use strict';

const express = require('express');
const userRouter = express.Router();
const jsonBodyParser = express.json();
const users = require('./users');

userRouter.get('/', (req, res, next) => {
  let user = [];

  if (!users.first) {
    return res.status(200).json([]);
  }
  else {
    let currNode = users.first;
    while (currNode !== null) {
      user.push(currNode.value);
      currNode = currNode.next;
    }

    res.status(200).json(user);
  }


});

userRouter.delete('/', jsonBodyParser, (req, res, next) => {
  users.dequeue();
  res.status(204).end();

});

module.exports = userRouter;
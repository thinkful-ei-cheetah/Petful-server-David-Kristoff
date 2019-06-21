'use strict';
const express = require('express');
const jsonBodyParser = express.json();
const catRouter = express.Router();
const cats = require('./cats');
const Users = require('../users/users');
const adopted = require('../adopted/adopted-service');


catRouter.route('/').get((req, res, next) => {
  let cat = [];

  if (!cats.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = cats.first.value;
    if (!currNode) return res.status(200).json(cat);
    console.log(currNode);
    return res.status(200).json(currNode);
  }
})

  .delete(jsonBodyParser, (req, res, next) => {
    handleDq();
    const interval = setInterval(() => {
      if (Users.first.value !== 'David') {
        handleDq();
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return res.status(204).end();
  });

function handleDq() {
  let deletedUser = Users.dequeue();
  let deleteCat = cats.dequeue();
  adopted.enqueue(Object.assign(deleteCat, deletedUser));
  cats.enqueue(deleteCat);
  Users.enqueue(deletedUser);
}

module.exports = catRouter;





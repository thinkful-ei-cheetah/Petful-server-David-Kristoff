'use strict';

const express = require('express');
const jsonBodyParser = express.json();
const dogRouter = express.Router();
const dog = require('./dogs');
const Users = require('../users/users');
const adopted = require('../adopted/adopted-service');

dogRouter.route('/').get((req, res, next) => {
  let dogs = [];

  if (!dog.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = dog.first.value;
    if (!currNode) return res.status(200).json(dogs);
    console.log(currNode);
    return res.status(200).json(currNode);
  }
})
  .delete(jsonBodyParser, (req, res, next) => {
    const deleteDog = dog.dequeue();
    console.log(deleteDog);
    const ad = Users.dequeue();
    console.log(ad.user);
    adopted.enqueue(Object.assign(deleteDog, ad));
    res.status(200).json(ad.user);
    const interval = setInterval(() => {
      let deletedUser = Users.dequeue();
      if (deletedUser.user !== 'David') {
        Users.enqueue(deletedUser);
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return;
  });



module.exports = dogRouter;
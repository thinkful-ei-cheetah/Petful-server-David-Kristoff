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
    // let deletedUser = Users.dequeue();
    //   const deleteDog = dog.dequeue();
    //   console.log(deleteDog);

    // const ad = Users.dequeue();
    // console.log(ad.user);
    // adopted.enqueue(Object.assign(deleteDog, deletedUser));
    // console.log(deletedUser, 'THIS IS THE DELETED USER');
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
  let deleteDog = dog.dequeue();
  adopted.enqueue(Object.assign(deleteDog, deletedUser));
}

module.exports = dogRouter;
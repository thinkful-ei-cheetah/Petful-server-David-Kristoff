'use strict';
const express = require('express');
const catRouter = express.Router();
const cats = require('./cats');
const Users = require('../users/users');
const adopted = require('../adopted/adopted-service');


catRouter.get('/', (req, res, next) => {
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

  catRouter.delete('/', (req, res, next) => {
    const deleteCat = cats.dequeue();
    const ad = Users.dequeue();
    adopted.enqueue(Object.assign(deleteCat, ad));
    res.status(200).json(ad.user);
  });
});


module.exports = catRouter;

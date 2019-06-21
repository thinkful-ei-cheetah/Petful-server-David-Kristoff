'use strict';

const express = require('express');
const adoptedRouter = express.Router();
const adoptedService = require('./adopted-service');

adoptedRouter.get('/', (req, res, next) => {
  let adopted = [];

  if (!adoptedService.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = adoptedService.first;
    while (currNode !== null) {
      adopted.push(currNode.value);
      currNode = currNode.next;
    }

    res.status(200).json(adopted);
  }


});

module.exports = adoptedRouter;
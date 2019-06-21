'use strict';
const express = require('express');
const catRouter = express.Router();
const cats = require('./cats');


catRouter.get('/', (req, res, next) => {
  let cat = [];

  if (!cats.first) {
    res.status(200).json([]);
  }
  else {
    let currNode = cats.first;
    while (currNode !== null) {
      cat.push(currNode.value);
      currNode = currNode.next;
    }

    res.status(200).json(cat);
  }


});


module.exports = catRouter;
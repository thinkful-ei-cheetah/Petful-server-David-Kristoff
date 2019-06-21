'use strict';

const Queue = require('../Queue');

const data = [
  {
    user: 'David'
  },
  {
    user: 'Kristof'
  },
  {
    user: 'Mike'
  },
  {
    user: 'Adam'
  },
  {
    user: 'Harrison'
  }
];

function userQ(arr) {
  let userQueue = new Queue();

  for (let i = 0; i < arr.length; i++) {
    userQueue.enqueue(arr[i]);
  }
  return userQueue;
}

const UserQueue = userQ(data);
module.exports = UserQueue;
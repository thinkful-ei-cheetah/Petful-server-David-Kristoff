'use strict';

const Queue = require('../Queue');

const data = [
  {
    id: 1,
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopted: ''
  }
];

function queueTheCats(arr) {
  let cq = new Queue();

  for (let i = 0; i < arr.length; i++) {
    cq.enqueue(arr[i]);
  }
  return cq;
}

const CatQueue = queueTheCats(data);
module.exports = CatQueue;
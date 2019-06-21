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
  },
  {
    id: 2,
    imageURL: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/images/russian-blue-cat-on-cat-bed.jpg',
    imageDescription: 'blue-gray cat laying on a quilt.',
    name: 'Greg',
    sex: 'Male',
    age: 2,
    breed: 'Russian Blue',
    story: 'Thrown off a bus',
    adopted: ''
  },
  {
    id: 3,
    imageURL: 'https://cf.ltkcdn.net/cats/images/std/243170-699x450-scottish-fold-cat.jpg',
    imageDescription: 'black cat laying on a couch.',
    name: 'Jones',
    sex: 'Male',
    age: 2,
    breed: 'Scottish Fold',
    story: 'Almost eaten by alien',
    adopted: ''
  },
  {
    id: 4,
    imageURL: 'https://www.catster.com/wp-content/uploads/2018/04/Turkish-Angora-close-up-on-couch.jpg',
    imageDescription: 'white cat on a red chair.',
    name: 'Steve',
    sex: 'Male',
    age: 2,
    breed: 'Turkish Angora',
    story: 'Thrown out a window',
    adopted: ''
  },
  {
    id: 5,
    imageURL: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/C271/production/_98677794_gettyimages-486869012.jpg',
    imageDescription: 'A cat that looks like a goat.',
    name: 'LeBron',
    sex: 'Male',
    age: 2,
    breed: 'Goat',
    story: 'The true GOAT',
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
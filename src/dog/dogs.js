'use strict';

const Queue = require('../Queue');

const data = [
  {
    id:1,
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    id: 2,
    imageURL: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/english-bulldog-detail.jpg?bust=1535565637&width=355',
    imageDescription: 'Bulldog standing in grass.',
    name: 'Morpheus',
    sex: 'Male',
    age: 3,
    breed: 'Bulldog',
    story: 'Owner ran away'
  },
  {
    id: 3,
    imageURL: 'https://houndsavers.org/wp-content/uploads/2017/01/sponsor.jpg',
    imageDescription: 'Greyhound laying in a dog bed.',
    name: 'Apollo',
    sex: 'Male',
    age: 3,
    breed: 'Greyhound',
    story: 'Owner spontaneously combusted'
  },
  {
    id: 4,
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/1eda3a7/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fcf%2Ffd%2Fa8e1cbb94e089302d632a143bb89%2FAP-1IRTJ4-ph645080113.jpg',
    imageDescription: 'A cute little chihuahua.',
    name: 'Dionysus',
    sex: 'Male',
    age: 3,
    breed: 'Chihuahua',
    story: 'Owner decided they wanted a larger dog'
  },
  {
    id: 5,
    imageURL: 'https://cdn.orvis.com/images/DBS_GreatDane_1280.jpg',
    imageDescription: 'A black Great Dane standing by a fence.',
    name: 'Ares',
    sex: 'Male',
    age: 3,
    breed: 'Great Dane',
    story: 'Owner passed away'
  }
];

function queueTheDogs(arr) {
  let dq = new Queue();

  for (let i = 0; i < arr.length; i++) {
    dq.enqueue(arr[i]);
  }
  return dq;
}

const DogQueue = queueTheDogs(data);
module.exports = DogQueue;
'use strict';

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (array) => {
  return array[getRandom(0, array.length - 1)];
};

window.util = {
  getRandomIntInclusive: getRandom,
  getRandomArrayElement: getRandomElement,
};

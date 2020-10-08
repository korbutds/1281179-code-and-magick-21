'use strict';
(() => {
  const setupUserName = document.querySelector(`.setup-user-name`);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Утилита рандомайзер
  const getRandomElement = (array) => {
    return array[getRandom(0, array.length - 1)];
  };

  const escPressOnModal = (evt, callback) => {
    if (evt.key === `Escape` && document.activeElement !== setupUserName) {
      evt.preventDefault();
      callback();
    }
  };

  const enterPress = (evt, callback) => {
    if (evt.key === `Enter`) {
      evt.preventDefault();
      callback();
    }
  };

  window.util = {
    getRandomIntInclusive: getRandom,
    getRandomArrayElement: getRandomElement,
    isEscEvent: escPressOnModal,
    isEnterEvent: enterPress
  };
})();

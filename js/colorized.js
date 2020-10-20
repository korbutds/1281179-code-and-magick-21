'use strict';
(() => {
  const getRandomColor = (array) => {
    return window.util.getRandomArrayElement(array);
  };

  window.colorObject = {};

  const letColorChange = (element, array, inputName) => {
    element.addEventListener(`click`, () => {
      const color = getRandomColor(array);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputName.value = color;
      window.colorObject.array = color;
    });
  };

  window.colorized = {
    changeElementColor: letColorChange
  };
})();

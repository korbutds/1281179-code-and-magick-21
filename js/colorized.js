'use strict';
(() => {
  const getRandomColor = (array) => {
    return window.util.getRandomArrayElement(array);
  };

  // window.colorObject = {
  //   coatColor: `#6589a4`,
  //   eyesColor: `black`,
  //   fireballColor: `#eeff30`
  // };

  // window.render.updateWizards = () => {
  //   window.render.successFragment()
  // };

  const letColorChange = (element, array, inputName, colorKey) => {
    element.addEventListener(`click`, () => {
      const color = getRandomColor(array);
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputName.value = color;
      window.colorObject[colorKey] = color;
      window.render.updateFragment();
    });
  };

  window.colorized = {
    changeElementColor: letColorChange
  };
})();

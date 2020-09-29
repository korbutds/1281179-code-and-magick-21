'use strict';

const setup = document.querySelector(`.setup`);
const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardsList = document.querySelector(`.setup-similar-list`);
const wizardsNames = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const wizardsSurnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const wizardsCoatsColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];

const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

const createWizardsDataArray = (count) => {
  const wizards = [];
  for (let i = 0; i < count; i++) {
    let wizard = {
      name: `${getRandomArrayElement(wizardsNames)} ${getRandomArrayElement(wizardsSurnames)}`,
      coatColor: getRandomArrayElement(wizardsCoatsColors),
      eyesColor: getRandomArrayElement(eyesColors)
    };
    wizards.push(wizard);
  }

  return wizards;
};

setup.classList.remove(`hidden`);

const createWizardElement = function (element) {
  let wizardElement = wizardsTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = element.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = element.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = element.eyesColor;

  return wizardElement;
};

const createWizardsFragment = (array) => {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    fragment.appendChild(createWizardElement(array[i]));
  }

  return fragment;
};

wizardsList.appendChild(createWizardsFragment(createWizardsDataArray(4)));

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

'use strict';

let setup = document.querySelector(`.setup`);
let wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let wizardsList = document.querySelector(`.setup-similar-list`);
let names = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
let surnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
let coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
let eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
let wizards = [];
let randomNames = [];

const makeRandomArr = (arr) => {
  // Функция возвращает массив, созданный из исходного. Возможно повторение значений.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[Math.round(Math.random() * (arr.length - 1))]);
  }
  return newArr;
};

const wizardGenerator = (wizardName, coat, eyes) => {
  let wizard = {
    name: wizardName,
    coatColor: coat,
    eyesColor: eyes
  };
  return wizard;
};

const randomArrIndex = (array) => {
  return Math.round(Math.random() * (array.length - 1));
};

let shuffleNames = makeRandomArr(names);
let shuffleSurnames = makeRandomArr(surnames);


for (let i = 0; i < shuffleNames.length; i++) {
  randomNames.push(`${shuffleNames[i]} ${shuffleSurnames[i]}`);
}

for (let i = 0; i < 4; i++) {
  wizards.push(wizardGenerator(randomNames[i], coatColors[randomArrIndex(coatColors)], eyesColors[randomArrIndex(eyesColors)]));
}


setup.classList.remove(`hidden`);

const renderWizard = function (wizard) {
  let wizardElement = wizardsTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

wizardsList.appendChild(fragment);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

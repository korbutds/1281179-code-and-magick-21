'use strict';

const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const setup = document.querySelector(`.setup`);
const wizardsList = setup.querySelector(`.setup-similar-list`);
const wizardsNames = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];
const wizardsSurnames = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const wizardsCoatsColors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
const fireballColor = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);
const MIN_USER_LENGTH = 2;
const MAX_USER_LENGTH = 25;
const setupPlayer = setup.querySelector(`.setup-player`);
const coatInput = setupPlayer.querySelector(`input[name = 'coat-color']`);
const eyesInput = setupPlayer.querySelector(`input[name = 'eyes-color']`);
const fireballInput = setupPlayer.querySelector(`input[name = 'fireball-color']`);
const setupWizard = setupPlayer.querySelector(`.setup-wizard`);
const wizardStyle = setupWizard.querySelector(`.wizard`);
const fireball = setup.querySelector(`.setup-fireball-wrap`);
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

const onModalEscPress = (evt) => {
  if (evt.key === `Escape` && document.activeElement !== setupUserName) {
    evt.preventDefault();
    closeModal(setup);
  }
};

const openModal = (element) => {
  element.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onModalEscPress);
};

const closeModal = (element) => {
  element.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onModalEscPress);
};

setupOpen.addEventListener(`click`, () => {
  openModal(setup);
});

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openModal(setup);
  }
});

setupClose.addEventListener(`click`, () => {
  closeModal(setup);
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closeModal(setup);
  }
});

setupUserName.addEventListener(`input`, () => {
  const userLength = setupUserName.value.length;
  if (userLength < MIN_USER_LENGTH) {
    setupUserName.setCustomValidity(`Ещё ${MIN_USER_LENGTH - userLength} сим.`);
  } else if (userLength > MAX_USER_LENGTH) {
    setupUserName.setCustomValidity(`Удалите лишние ${MAX_USER_LENGTH - userLength} сим.`);
  } else {
    setupUserName.setCustomValidity(``);
  }

  setupUserName.reportValidity();
});

const letChangeCoatFill = (evt) => {
  const changeColor = wizardsCoatsColors[getRandomIntInclusive(0, wizardsCoatsColors.length - 1)];
  coatInput.value = changeColor;
  evt.target.style.fill = changeColor;
};

const letChangeEyesFill = (evt) => {
  const changeColor = eyesColors[getRandomIntInclusive(0, eyesColors.length - 1)];
  eyesInput.value = changeColor;
  evt.target.style.fill = changeColor;
};

const letChangeFireballColor = () => {
  const changeColor = fireballColor[getRandomIntInclusive(0, fireballColor.length - 1)];
  fireballInput.value = changeColor;
  fireball.style.backgroundColor = changeColor;
};

wizardStyle.addEventListener(`click`, (evt) =>{
  const targetId = evt.target.getAttributeNS(`http://www.w3.org/1999/xlink`, `href`).slice(1);
  if (targetId === `wizard-coat`) {
    letChangeCoatFill(evt);
  } else if (targetId === `wizard-eyes`) {
    letChangeEyesFill(evt);
  }
});

fireball.addEventListener(`click`, () => {
  letChangeFireballColor();
});

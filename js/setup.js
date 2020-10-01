'use strict';

const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const setup = document.querySelector(`.setup`);
const wizardsList = setup.querySelector(`.setup-similar-list`);
const wizardsNames = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const wizardsSurnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const wizardsCoatsColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);
const MIN_USER_LENGTH = 2;
const MAX_USER_LENGTH = 25;

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
    evt.preventDefault();
    openModal(setup);
  }
});

setupClose.addEventListener(`click`, () => {
  closeModal(setup);
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    evt.preventDefault();
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

/*
Задача

Изменение цвета мантии персонажа по нажатию. Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на неё. Цвет мантии задаётся через изменение инлайнового CSS-свойства fill для элемента. Цвет должен сменяться произвольным образом на один из следующих цветов:

rgb (101, 137, 164)
rgb (241, 43, 107)
rgb (146, 100, 161)
rgb (56, 159, 117)
rgb (215, 210, 55)
rgb (0, 0, 0)
Изменение цвета глаз персонажа по нажатию. Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes. Возможные варианты цвета глаз персонажа:

black
red
blue
yellow
green
Изменение цвета фаерболов по нажатию. Цвет задаётся через изменение фона у блока .setup-fireball-wrap. Возможные варианты цвета:

#ee4830
#30a8ee
#5ce6c0
#e848d5
#e6e848
Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно изменяться и значение соответствующего скрытого тега <input>.

Отправка формы. Форма должна отправляться по адресу https://javascript.pages.academy/code-and-magick методом POST с типом multipart/form-data
Ограничений на алгоритм выбора цвета нет: это может быть случайный выбор, а может быть изменение цвета по порядку в списке.

Пример того, как может выглядеть персонаж после изменений:
*/

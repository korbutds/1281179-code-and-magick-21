'use strict';
(() => {
  const MAX_WIZARDS = 4;
  const setup = document.querySelector(`.setup`);
  const wizardsList = setup.querySelector(`.setup-similar-list`);
  const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
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

  const createWizardsDataArray = (count) => {
    const wizards = [];
    for (let i = 0; i < count; i++) {
      const wizard = {
        name: `${window.util.getRandomArrayElement(wizardsNames)} ${window.util.getRandomArrayElement(wizardsSurnames)}`,
        coatColor: window.util.getRandomArrayElement(wizardsCoatsColors),
        eyesColor: window.util.getRandomArrayElement(eyesColors)
      };
      wizards.push(wizard);
    }

    return wizards;
  };

  const createWizardElement = (element) => {
    const wizardElement = wizardsTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = element.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = element.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = element.colorEyes;

    return wizardElement;
  };

  const creatRandomWizard = createWizardElement(createWizardsDataArray(1));


  const createWizardsFragment = (wizards) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_WIZARDS; i++) {
      fragment.appendChild(createWizardElement(wizards[i]));
    }

    wizardsList.appendChild(fragment);
  };

  window.backend.load(createWizardsFragment);

  window.wizards = {
    getWizardsFragment: createWizardsFragment,
    getRandomWizard: creatRandomWizard
  };
})();

'use strict';
(() => {
  const MAX_WIZARDS = 4;
  const setup = document.querySelector(`.setup`);
  const wizardsList = setup.querySelector(`.setup-similar-list`);
  const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const createWizardElement = (element) => {
    const wizardElement = wizardsTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = element.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = element.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = element.colorEyes;

    return wizardElement;
  };

  const createWizardsFragment = (wizards) => {
    wizardsList.innerHTML = ``;
    const fragment = document.createDocumentFragment();
    let wizardNumber = wizards.length;
    if (wizards.length > 4) {
      wizardNumber = MAX_WIZARDS;
    }
    for (let i = 0; i < wizardNumber; i++) {
      fragment.appendChild(createWizardElement(wizards[i]));
    }

    wizardsList.appendChild(fragment);
  };

  let wizards = [];

  window.colorObject = {
    coatColor: `rgb(101, 137, 164)`,
    eyesColor: `black`,
    fireballColor: `#eeff30`
  };

  const successServerFragment = (data) => {
    wizards = data;
    updateWizards();
  };

  const getRank = (wizard) => {
    let rank = 0;
    if (wizard.colorCoat === window.colorObject.coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === window.colorObject.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = () => {
    createWizardsFragment(wizards.sort((left, right) => {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  const errorServerFragment = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.render = {
    successFragment: successServerFragment,
    errorFragment: errorServerFragment,
    updateFragment: updateWizards
  };
})();

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

  const updateWizards = () => {
    const sameCoatWizards = wizards.filter((wizard) => {
      return wizard.colorCoat === window.colorObject.coatColor;
    });

    const sameEyesWizards = wizards.filter((wizard) => {
      return wizard.colorEyes === window.colorObject.eyesColor;
    });

    const wizardsArray = sameCoatWizards.concat(sameEyesWizards).concat(wizards);

    createWizardsFragment(wizardsArray);
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

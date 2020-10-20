'use strict';
// Создание списка волшебников
const setup = document.querySelector(`.setup`);
const setupAvatar = setup.querySelector(`.upload`);
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
const setupPlayer = setup.querySelector(`.setup-player`);
const coatInput = setupPlayer.querySelector(`input[name = 'coat-color']`);
const eyesInput = setupPlayer.querySelector(`input[name = 'eyes-color']`);
const fireballInput = setupPlayer.querySelector(`input[name = 'fireball-color']`);
const fireball = setup.querySelector(`.setup-fireball-wrap`);
const wizardCoat = setup.querySelector(`.wizard-coat`);
const wizardEyes = setup.querySelector(`.wizard-eyes`);
window.backend.load(window.render.successFragment, window.render.errorFragment);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
window.colorized.changeElementColor(wizardCoat, wizardsCoatsColors, coatInput);
window.colorized.changeElementColor(wizardEyes, eyesColors, eyesInput);
window.colorized.changeElementColor(fireball, fireballColor, fireballInput);
window.move.transformingElement(setupAvatar, setup);


'use strict';
const setup = document.querySelector(`.setup`);
const setupAvatar = setup.querySelector(`.upload`);
window.backend.load(window.render.successFragment, window.render.errorFragment);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
window.move.transformingElement(setupAvatar, setup);


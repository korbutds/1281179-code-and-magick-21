'use strict';

const setup = document.querySelector(`.setup`);
const setupUserName = setup.querySelector(`.setup-user-name`);
const MIN_USER_LENGTH = 2;
const MAX_USER_LENGTH = 25;

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

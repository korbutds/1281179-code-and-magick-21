'use strict';
(() => {
  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupUserName = setup.querySelector(`.setup-user-name`);

  const openModal = (element) => {
    element.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onModalEscPress);
  };

  const closeModal = (element) => {
    element.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onModalEscPress);
  };

  const onModalEscPress = (evt) => {
    if (evt.key === `Escape` && document.activeElement !== setupUserName) {
      evt.preventDefault();
      closeModal(setup);
    }
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

  const form = setup.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      setup.classList.add(`hidden`);
    }, window.wizards.errorFragment);
  });

})();

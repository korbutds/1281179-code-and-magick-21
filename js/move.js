'use strict';

(() => {
  const letTransformElement = (element, modal) => {

    element.addEventListener(`mousedown`, (evt) => {
      evt.preventDefault();

      let startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      let moveFlag = false;

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();

        moveFlag = true;

        const shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        modal.style.top = `${modal.offsetTop - shift.y}px`;
        modal.style.left = `${modal.offsetLeft - shift.x}px`;

      };

      const onMouseUp = (upEvt) => {
        upEvt.preventDefault();

        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);

        if (moveFlag) {
          const onClickPreventDefault = (clickEvt) => {
            clickEvt.preventDefault();
            element.removeEventListener(`click`, onClickPreventDefault);
          };
          element.addEventListener(`click`, onClickPreventDefault);
        }
      };
      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    });
  };
  window.move = {
    transformingElement: letTransformElement
  };
})();

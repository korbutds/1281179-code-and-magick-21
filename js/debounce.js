'use strict';

(() => {
  const DEBOUNCE_TIMER = 5000;
  window.debounce = (cb) => {
    let lastTimeout = null;
    return (...parameters) => {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb(...parameters);
      }, DEBOUNCE_TIMER);
    };
  };
})();

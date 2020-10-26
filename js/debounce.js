'use strict';

const DEBOUNCE_TIMER = 500;
let lastTimeout;

window.debounce = (cb) => {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(cb, DEBOUNCE_TIMER);
};

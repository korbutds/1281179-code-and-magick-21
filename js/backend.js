'use strict';

(() => {
  const URL = `https://21.javascript.pages.academy/code-and-magick/data`;

  const loadData = function (onLoad) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.open(`GET`, URL);

    xhr.addEventListener(`load`, function () {
      onLoad(xhr.response);
    });

    xhr.send();


  };

  const saveData = () => {};

  window.backend = {
    load: loadData,
    save: saveData
  };
})();

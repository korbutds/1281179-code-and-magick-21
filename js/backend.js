'use strict';

const errorCheck = (request, onLoad, onError) => {
  const STATUS_CODE = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  request.responseType = `json`;

  request.addEventListener(`load`, () => {
    if (request.status === STATUS_CODE.OK) {
      onLoad(request.response);
    } else {
      onError(`Статус ответа: ${request.status} ${request.statusText}`);
    }
  });
  request.addEventListener(`error`, () => {
    onError(`Произошла ошибка соеденения`);
  });
  request.addEventListener(`timeout`, () => {
    onError(`Запрос не успел выполниться за ${request.timeout}мс`);
  });
  request.timeout = TIMEOUT_IN_MS;
};

const loadData = (onLoad, onError) => {
  const URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const xhr = new XMLHttpRequest();
  errorCheck(xhr, onLoad, onError);
  xhr.open(`GET`, URL);
  xhr.send();
};

const saveData = (data, onSuccess, onError) => {
  const URL = `https://21.javascript.pages.academy/code-and-magick`;
  const xhr = new XMLHttpRequest();
  errorCheck(xhr, onSuccess, onError);
  xhr.open(`POST`, URL);
  xhr.send(data);
};

window.backend = {
  load: loadData,
  save: saveData
};

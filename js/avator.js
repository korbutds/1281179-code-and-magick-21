'use strict';
const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];

const uploadSection = document.querySelector(`.upload`);
const avatorImage = uploadSection.querySelector(`.setup-user-pic`);
const inputAvator = uploadSection.querySelector(`input[type=file]`);

inputAvator.addEventListener(`change`, () => {
  const file = inputAvator.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) =>{
    return fileName.endsWith(type);
  });

  if (matches) {
    let reader = new FileReader();

    reader.addEventListener(`load`, () => {
      avatorImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

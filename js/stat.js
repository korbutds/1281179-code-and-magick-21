'use strict';

const CLOUD_HEIGTH = 270;
const CLOUD_WIDTH = 420;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_COLOR = `#ffffff`;
const CLOUD_SHADOW_COLOR = `rgba(0, 0, 0, 0.7)`;
const GAP = 10;
const COLUMN_GAP = 50;
const TEXT_HEIGHT = 16;
const TEXT_START = CLOUD_Y + GAP * 2;
const TEXT_COLOR = `#000000`;
const LINE_HEIGHT = 20;
const COLUMN_WIDTH = 40;
const COLUMN_MAX_HEIGHT = 150;
const COLUMN_HERO_FILL = `rgba(255, 0, 0, 1)`;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.textBaseline = `hanging`;
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = `${TEXT_HEIGHT}px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + COLUMN_GAP / 2, TEXT_START);
  ctx.fillText(`Список результатов:`, CLOUD_X + COLUMN_GAP / 2, TEXT_START + LINE_HEIGHT);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP / 2 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGTH - COLUMN_MAX_HEIGHT * times[i] / maxTime - GAP * 3 - TEXT_HEIGHT);
    if (names[i] === `Вы`) {
      ctx.fillStyle = COLUMN_HERO_FILL;
    } else {
      ctx.fillStyle = `hsl(240, ${Math.random().toFixed(2) * 100}%, 50%)`;
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP / 2 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGTH - TEXT_HEIGHT - GAP, COLUMN_WIDTH, -COLUMN_MAX_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP / 2 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGTH - TEXT_HEIGHT);
  }
};

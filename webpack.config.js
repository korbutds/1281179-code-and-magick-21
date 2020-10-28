const path = require(`path`);

module.exports = {
  entry: [
    `./js/backend.js`,
    `./js/util.js`,
    `./js/debounce.js`,
    `./js/render.js`,
    `./js/colorized.js`,
    `./js/wizards.js`,
    `./js/validation.js`,
    `./js/setup-modal`,
    `./js/move.js`,
    `./js/stat.js`,
    `./js/setup.js`,
    `./js/avator.js`,
    `./js/game.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}

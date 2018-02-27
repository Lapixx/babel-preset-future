module.exports = function (api, opts) {
  return {
    presets: [
      [require('babel-preset-env'), opts],
      require('babel-preset-stage-0')
    ]
  }
};

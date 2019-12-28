module.exports = txt => txt
  .split('')
  .filter(i => [' ', '\n', '\t'].indexOf(i) >= 0)
  .join("")

const io = require('./io')
const stack = require('./stack')
const arithmetic = require('./arithmetic')
const flow = require('./flow')
const heap = require('./heap')

module.exports = line => {
  let other, data = null

  switch(line.slice(0,2)) {
    case '\t\n':
      [other, data] = io(line.slice(2))
      return [other, Object.assign({}, {op: 'IO'}, data)]
    case '  ':
    case ' \t':
    case ' \n':
      [other, data] = stack(line.slice(1))
      return [other, Object.assign({}, {op: 'STACK'}, data)]
    case '\t ':
      [other, data] = arithmetic(line.slice(2))
      return [other, Object.assign({}, {op: 'ARITHMETIC'}, data)]
    case '\n ':
    case '\n\t':
    case '\n\n':
      [other, data] = flow(line.slice(1))
      return [other, Object.assign({}, {op: 'FLOW'}, data)]
    case '\t\t':
      [other, data] = heap(line.slice(2))
      return [other, Object.assign({}, {op: 'HEAP'}, data)]
    default:
      throw new Error("Invalid syntax")
      break
  }

  return [line, command]
}

const number = require('./number')

module.exports = line => {
  switch(line.slice(0,2)) {
    case '  ':
    case ' \t':
    case ' \n':
      let [other, data] = number(line.slice(1))
      return [other, Object.assign({}, {command: 'PUSH_NUMBER_STACK_TOP'}, data)]
    case '\n ':
      return [line.slice(2), {command: 'DUPLICATE_STACK_TOP', params: null}]
    case '\n\t':
      return [line.slice(2), {command: 'SWAP_TWO_STACK_ITEMS', params: null}]
    case '\n\n':
      return [line.slice(2), {command: 'DISCARD_STACK_TOP', params: null}]
    default:
      throw new Error("Invalid Command Syntax")
  }
}

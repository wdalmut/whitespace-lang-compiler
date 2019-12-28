const label = require('./label')

module.exports = line => {
  let other, data = null

  switch(line.slice(0,2)) {
    case '  ':
      [other, data] = label(line.slice(2))
      return [other, Object.assign({}, {command: 'MARK'}, data)]
    case ' \t':
      [other, data] = label(line.slice(2))
      return [other, Object.assign({}, {command: 'CALL'}, data)]
    case ' \n':
      [other, data] = label(line.slice(2))
      return [other, Object.assign({}, {command: 'JP'}, data)]
    case '\t ':
      [other, data] = label(line.slice(2))
      return [other, Object.assign({}, {command: 'JP0'}, data)]
    case '\t\t':
      [other, data] = label(line.slice(2))
      return [other, Object.assign({}, {command: 'JPL0'}, data)]
    case '\t\n':
      return [line.slice(2), {command: 'RET', params: null}]
    case '\n\n':
      return [line.slice(2), {command: 'END', params: null}]
    default:
      throw new Error("Invalid Command Syntax")
  }
}


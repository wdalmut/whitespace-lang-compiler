module.exports = line => {
  switch(line.slice(0,2)) {
    case '  ':
      return [line.slice(2), {command: 'ADD', params: null}]
    case ' \t':
      return [line.slice(2), {command: 'SUB', params: null}]
    case ' \n':
      return [line.slice(2), {command: 'MULT', params: null}]
    case '\t ':
      return [line.slice(2), {command: 'DIV', params: null}]
    case '\t\t':
      return [line.slice(2), {command: 'MOD', params: null}]
    default:
      throw new Error("Invalid Command Syntax")
  }
}


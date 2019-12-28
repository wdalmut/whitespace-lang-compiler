
module.exports = line => {
  switch(line.slice(0,2)) {
    case '\t ':
      return [line.slice(2), {command: 'READ_CHAR', params: null}]
    case '\t\t':
      return [line.slice(2), {command: 'READ_NUMBER', params: null}]
    case '  ':
      return [line.slice(2), {command: 'OUTPUT_CHAR', params: null}]
    case ' \t':
      return [line.slice(2), {command: 'OUTPUT_NUMBER', params: null}]
    default:
      throw new Error("Invalid Command Syntax")
  }
}

module.exports = line => {
  let other, data = null

  switch(line.slice(0,1)) {
    case ' ':
      return [line.slice(1), {command: 'STORE', params: null}]
    case '\t':
      return [line.slice(1), {command: 'RETR', params: null}]
    default:
      throw new Error("Invalid Command Syntax")
  }
}



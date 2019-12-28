const clear = require('./clear')
const parse = require('./parse')

module.exports = line => {
  let program = []

  line = clear(line)

  do {
    let [other, data] = parse(line)
    line = other

    program = program.concat(data)

    if (data.command === 'END') {
      break
    }
  } while (true);

  return program
}

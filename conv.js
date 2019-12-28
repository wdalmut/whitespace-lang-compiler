const fs = require('fs')

let line = fs.readFileSync('./spec/support/hello.ws').toString()

console.log(line.replace(/\[Space\]/g, ' ').replace(/\[Tab\]/g, '\t').replace(/\[LF\]/g, '\n'))

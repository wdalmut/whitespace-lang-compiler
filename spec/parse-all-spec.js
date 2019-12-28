const parse = require('../src/parse-all')

describe("Parse All", () => {
  [
    {input: '\t\n\t \n\n\n', output: [{op: 'IO', command: 'READ_CHAR', params: null}, {op: 'FLOW', command: 'END', params: null}], line: 'Program 1'},
    {input: '\t\n\t \n\n\n\t\n\t \n\n\n', output: [{op: 'IO', command: 'READ_CHAR', params: null}, {op: 'FLOW', command: 'END', params: null}], line: 'Program 2'},
  ].map(({input, output, line}) => {
    it(`should parse ${line}`, () => {
      expect(parse(input)).toEqual(output)
    })
  })
})

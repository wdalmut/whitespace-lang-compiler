const io = require('../src/io')

describe("IO", () => {
  [
    {input: '\t ', output: ['', {command: 'READ_CHAR', params: null}], line: 'Read a character and place it in the location given by the top of the stack'},
    {input: '\t\t', output: ['', {command: 'READ_NUMBER', params: null}], line: 'Read a number and place it in the location given by the top of the stack'},
    {input: '  ', output: ['', {command: 'OUTPUT_CHAR', params: null}], line: 'Output the character at the top of the stack'},
    {input: ' \t', output: ['', {command: 'OUTPUT_NUMBER', params: null}], line: 'Output the number at the top of the stack'},
  ].map(({input, output, line}) => {
    it(`should parse IO: ${line}`, () => {
      expect(io(input)).toEqual(output)
    });
  })
})

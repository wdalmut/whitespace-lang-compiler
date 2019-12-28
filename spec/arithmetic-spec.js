const arithmetic = require('../src/arithmetic')

describe("Arithmetic", () => {
  [
    {input:  '  ', output: ['', {command: 'ADD', params: null}], line: 'Addition'},
    {input:  '  \n\n\n', output: ['\n\n\n', {command: 'ADD', params: null}], line: 'Addition'},
    {input:  ' \t', output: ['', {command: 'SUB', params: null}], line: 'Subtraction'},
    {input:  ' \t\n\n\n', output: ['\n\n\n', {command: 'SUB', params: null}], line: 'Subtraction'},
    {input:  ' \n', output: ['', {command: 'MULT', params: null}], line: 'Multiplication'},
    {input:  ' \n\n\n\n', output: ['\n\n\n', {command: 'MULT', params: null}], line: 'Multiplication'},
    {input:  '\t ', output: ['', {command: 'DIV', params: null}], line: 'Integer Division'},
    {input:  '\t \n\n\n', output: ['\n\n\n', {command: 'DIV', params: null}], line: 'Integer Division'},
    {input:  '\t\t', output: ['', {command: 'MOD', params: null}], line: 'Modulo'},
    {input:  '\t\t\n\n\n', output: ['\n\n\n', {command: 'MOD', params: null}], line: 'Modulo'},
  ].map(({input, output, line}) => {
    it(`should parse Stack: ${line}`, () => {
      expect(arithmetic(input)).toEqual(output)
    });
  })
})


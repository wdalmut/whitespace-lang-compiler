const number = require('../src/number')

describe("Number", () => {
  [
    {input: '  \n', output: ['', {params: 0}], line: 'Number 0'},
    {input: ' \t\n', output: ['', {params: 1}], line: 'Number 1'},
    {input: '\t\t\n', output: ['', {params: -1}], line: 'Number -1'},
    {input: ' \t\t\n', output: ['', {params: 3}], line: 'Number 3'},
    {input: '\t\t\t\n', output: ['', {params: -3}], line: 'Number -3'},
    {input: '\t\t\t\n\t \n\n\n', output: ['\t \n\n\n', {params: -3}], line: 'Number -3'},
  ].map(({input, output, line}) => {
    it(`should parse numbers: ${line}`, () => {
      expect(number(input)).toEqual(output)
    });
  })
})


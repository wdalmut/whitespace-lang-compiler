const label = require('../src/label')

describe("Label", () => {
  [
    {input: '  \n', output: ['', {params: '  '}], line: 'Number 0'},
    {input: '  \n\n\n\n', output: ['\n\n\n', {params: '  '}], line: 'Number 0'},
    {input: '\t\t\n', output: ['', {params: '\t\t'}], line: 'Number 0'},
    {input: '  \t\t\n', output: ['', {params: '  \t\t'}], line: 'Number 0'},
    {input: '  \t\t\n\n\n\n', output: ['\n\n\n', {params: '  \t\t'}], line: 'Number 0'},
  ].map(({input, output, line}) => {
    it(`should parse numbers: ${line}`, () => {
      expect(label(input)).toEqual(output)
    });
  })
})



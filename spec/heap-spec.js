const heap = require('../src/heap')

describe("Flow", () => {
  [
    {input:  ' ', output: ['', {command: 'STORE', params: null}], line: 'Store'},
    {input:  ' \n\n\n', output: ['\n\n\n', {command: 'STORE', params: null}], line: 'Store'},
    {input:  '\t', output: ['', {command: 'RETR', params: null}], line: 'Retrieve'},
    {input:  '\t\n\n\n', output: ['\n\n\n', {command: 'RETR', params: null}], line: 'Retrieve'},
  ].map(({input, output, line}) => {
    it(`should parse Heap: ${line}`, () => {
      expect(heap(input)).toEqual(output)
    });
  })
})




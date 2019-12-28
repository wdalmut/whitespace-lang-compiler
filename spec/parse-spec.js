const parse = require('../src/parse')

describe("Parse", () => {
  [
    {input: '\t\n\t ', output: ['', {op: 'IO', command: 'READ_CHAR', params: null}], line: 'I/O Read a character and place it in the location given by the top of the stack'},
    {input: '\t\n\t \n\n\n', output: ['\n\n\n', {op: 'IO', command: 'READ_CHAR', params: null}], line: 'I/O Read a character and place it in the location given by the top of the stack (2)'},
    {input: '    \n', output: ['', {op: 'STACK', command:'PUSH_NUMBER_STACK_TOP', params: 0}], line: 'Stack Manipulation Push number on the top of the stack'},
    {input: '    \n\n\n\n', output: ['\n\n\n', {op: 'STACK', command:'PUSH_NUMBER_STACK_TOP', params: 0}], line: 'Stack Manipulation Push number on the top of the stack'},
    {input: '\t   ', output: ['', {op: 'ARITHMETIC', command:'ADD', params: null}], line: 'Arithmetic Addition'},
    {input: '\t   \n\n\n', output: ['\n\n\n', {op: 'ARITHMETIC', command:'ADD', params: null}], line: 'Arithmetic Addition'},
    {input: '\n\n\n  ', output: ['  ', {op: 'FLOW', command:'END', params: null}], line: 'Flow control Ends the program'},
    {input: '\n\n\n  \n\n\n', output: ['  \n\n\n', {op: 'FLOW', command:'END', params: null}], line: 'Flow control Ends the program'},
    {input: '\t\t \n\n\n', output: ['\n\n\n', {op: 'HEAP', command:'STORE', params: null}], line: 'Heap access Store'},
    {input: '\t\t\t\n\n\n', output: ['\n\n\n', {op: 'HEAP', command:'RETR', params: null}], line: 'Heap access Retrieve'},
  ].map(({input, output, line}) => {
    it(`should parse ${line}`, () => {
      expect(parse(input)).toEqual(output)
    })
  })
})

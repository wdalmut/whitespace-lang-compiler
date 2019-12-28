const stack = require('../src/stack')

describe("Stack", () => {
  [
    {input:  '   \n', output: ['', {command: 'PUSH_NUMBER_STACK_TOP', params: 0}], line: 'Push number on the top of the stack'},
    {input:  '   \n\n\n\n', output: ['\n\n\n', {command: 'PUSH_NUMBER_STACK_TOP', params: 0}], line: 'Push number on the top of the stack'},
    {input:  '  \t\n', output: ['', {command: 'PUSH_NUMBER_STACK_TOP', params: 1}], line: 'Push number on the top of the stack'},
    {input:  '  \t\n\n\n\n', output: ['\n\n\n', {command: 'PUSH_NUMBER_STACK_TOP', params: 1}], line: 'Push number on the top of the stack'},
    {input: '\n ', output: ['', {command: 'DUPLICATE_STACK_TOP', params: null}], line: 'Duplicate the top item on the stack'},
    {input: '\n \n\n\n', output: ['\n\n\n', {command: 'DUPLICATE_STACK_TOP', params: null}], line: 'Duplicate the top item on the stack'},
    {input: '\n\n', output: ['', {command: 'DISCARD_STACK_TOP', params: null}], line: 'Discard the top item on the stack'},
    {input: '\n\n\n\n\n', output: ['\n\n\n', {command: 'DISCARD_STACK_TOP', params: null}], line: 'Discard the top item on the stack'},
  ].map(({input, output, line}) => {
    it(`should parse Stack: ${line}`, () => {
      expect(stack(input)).toEqual(output)
    });
  })
})

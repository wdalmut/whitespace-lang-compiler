const flow = require('../src/flow')

describe("Flow", () => {
  [
    {input:  '    \n', output: ['', {command: 'MARK', params: '  '}], line: 'Mark a location in the program'},
    {input:  '    \n\n\n\n', output: ['\n\n\n', {command: 'MARK', params: '  '}], line: 'Mark a location in the program'},
    {input:  ' \t  \n', output: ['', {command: 'CALL', params: '  '}], line: 'Call a subroutine'},
    {input:  ' \t  \n\n\n\n', output: ['\n\n\n', {command: 'CALL', params: '  '}], line: 'Call a subroutine'},
    {input:  ' \n  \n', output: ['', {command: 'JP', params: '  '}], line: 'Jump unconditionally to a label'},
    {input:  ' \n  \n\n\n\n', output: ['\n\n\n', {command: 'JP', params: '  '}], line: 'Jump unconditionally to a label'},
    {input:  '\t   \n', output: ['', {command: 'JP0', params: '  '}], line: 'Jump to a label if the top of the stack is zero'},
    {input:  '\t   \n\n\n\n', output: ['\n\n\n', {command: 'JP0', params: '  '}], line: 'Jump to a label if the top of the stack is zero'},
    {input:  '\t\t  \n', output: ['', {command: 'JPL0', params: '  '}], line: 'Jump to a label if the top of the stack is negative'},
    {input:  '\t\t  \n\n\n\n', output: ['\n\n\n', {command: 'JPL0', params: '  '}], line: 'Jump to a label if the top of the stack is negative'},
    {input:  '\t\n  \n', output: ['  \n', {command: 'RET', params: null}], line: 'End a subroutine and transfer control back to the caller'},
    {input:  '\t\n  \n\n\n\n', output: ['  \n\n\n\n', {command: 'RET', params: null}], line: 'End a subroutine and transfer control back to the caller'},
    {input:  '\n\n  \n', output: ['  \n', {command: 'END', params: null}], line: 'End a subroutine and transfer control back to the caller'},
    {input:  '\n\n  \n\n\n\n', output: ['  \n\n\n\n', {command: 'END', params: null}], line: 'End a subroutine and transfer control back to the caller'},
  ].map(({input, output, line}) => {
    it(`should parse Stack: ${line}`, () => {
      expect(flow(input)).toEqual(output)
    });
  })
})



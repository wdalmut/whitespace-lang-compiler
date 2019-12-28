const clear = require('../src/clear')

describe("whitespace", () => {
  it("should drop letters", () => {
    expect(clear("test this\tfile")).toBe(" \t")
  })
})

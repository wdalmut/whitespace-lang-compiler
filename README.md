# Whitespace Lang Compiler

```sh
cat spec/support/hello.ws | whitespacec | tee file.wsj
```

And you will receive the AST back in JSON

```
[{"op":"STACK","command":"PUSH_NUMBER_STACK_TOP","params":72},{"op":"IO","command":"OUTPUT_CHAR","params":null},...]
```

Compile a WHITESPACE program into a simple AST stream for the
whitespace-interpreter (VM)


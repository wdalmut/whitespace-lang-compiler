
module.exports = line => {
  let sign = 1

  switch (line[0]) {
    case ' ':
      sign = 1;
      break
    case '\t':
      sign = -1;
      break
    default:
      throw new Error("Invalid number")
  }

  line = line.slice(1)

  let number_ends_at = line.indexOf("\n")

  if (number_ends_at <= 0) {
    throw new Error("Invalid number")
  }

  let number = sign*parseInt(line.slice(0, number_ends_at).replace(/ /g, 0).replace(/\t/g, 1), 2)

  line = line.slice(number_ends_at+1)

  return [line, {params: number}]
}

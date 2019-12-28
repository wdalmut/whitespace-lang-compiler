module.exports = line => {
  let label_end_position = line.indexOf("\n")

  if (label_end_position <= 0) {
    throw new Error("Invalid label")
  }

  let label = line.slice(0, label_end_position)

  return [line.slice(label_end_position+1), {params: label}]
}


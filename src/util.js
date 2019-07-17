
const VALID = 0
const START = 1
const END = 2
const DATA = 3

const optional = (parse) => {
  return (input, offset) => {
    const parseResult = parse(input, offset)

    if (parseResult[VALID]) {
      return parseResult
    } else {
      return packet(true, offset, offset, {})
    }
  }
}

function acceptLiteral (input, offset, literal) {
  let length = literal.length / 2
  let i = offset
  let j = 0
  let k = length

  while ((input[i] === literal[j]) || (input[i] === literal[k])) { i++; j++; k++ }

  return i === offset + length ? i : 0
}

const compose = function (...parseChain) {
  return (input, offset) => {
    let i = 0
    let data = {}
    let first = null
    let last = packet(true, offset, offset)

    for (; last[VALID] && i < parseChain.length; i++) {
      const parse = parseChain[i]
      last = parse(input, last[END])
      first = first || last
      Object.assign(data, last[DATA])
    }

    const parsedAll = i >= parseChain.length

    return packet(parsedAll, first[START], last[END], data)
  }
}

function acceptNonSpace (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[^\s\r\n]/)

  return end > start ? end : 0
}

function ignoreEmptyLines (input, offset) {
  return ignoreRegex(input, offset, /\s+/)
}

function ignoreRegex (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) { i++ }

  return i
}

function ignoreSpaces (input, offset) {
  return ignoreRegex(input, offset, /[ \t]/)
}

function packet (valid, start, end, data) {
  return [valid, start, end, data]
}

function parseKeyword (literal, result) {
  return (input, offset) => {
    let start = offset

    let end = acceptLiteral(input, start, literal)

    if (end) { return packet(true, start, end, result) }

    return packet(false)
  }
}

function parseLine (input, offset) {
  let start = offset
  let end = acceptNonSpace(input, start)

  if (end) {
    let firstTokenEnd = end
    let left = start
    let right = end

    while (end) {
      start = ignoreSpaces(input, end)
      end = acceptNonSpace(input, start)

      if (end) { right = end }
    }

    return packet(true, left, right, firstTokenEnd)
  }

  return packet(false)
}

module.exports = {
  VALID,
  START,
  END,
  DATA,

  compose,
  optional,

  acceptLiteral,
  acceptNonSpace,
  ignoreEmptyLines,
  packet,
  parseKeyword,
  parseLine
}

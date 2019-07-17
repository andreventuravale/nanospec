
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

function ignoreEmptyLines (input, offset) {
  return ignoreRegex(input, offset, /\s+/)
}

function ignoreRegex (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) { i++ }

  return i
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

function ignoreSpace (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[ \t]/)

  return end > start ? end : 0
}

function ignoreSpaces (input, offset) {
  return ignoreRegex(input, offset, /[ \t]/)
}

function packet (valid, start, end, data) {
  return [valid, start, end, data]
}

function parseLine (input, offset) {
  let start = offset
  let end = recognizeNonSpace(input, start)

  if (end) {
    let firstTokenEnd = end
    let from = start
    let to = end

    while (end) {
      start = ignoreSpaces(input, end)
      end = recognizeNonSpace(input, start)

      if (end) { to = end }
    }

    return packet(true, from, to, firstTokenEnd)
  }

  return packet(false)
}

function parseLiteral (literal, result) {
  return (input, offset) => {
    let start = offset

    let end = recognizeLiteral(input, start, literal)

    if (end) { return packet(true, start, end, result) }

    return packet(false)
  }
}

function parseWord (lcase, ucase, result) {
  return (input, offset) => {
    let start = offset

    let end = recognizeWord(input, start, lcase, ucase)

    if (end) { return packet(true, start, end, result) }

    return packet(false)
  }
}

function recognizeLiteral (input, offset, literal) {
  let i = offset
  let j = 0

  while (input[i] === literal[j]) { i++; j++ }

  return j === literal.length ? i : 0
}

function recognizeNonSpace (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[^\s\r\n]/)

  return end > start ? end : 0
}

function recognizeWord (input, offset, lcase, ucase) {
  let i = offset
  let j = 0

  while ((input[i] === lcase[j]) || (input[i] === ucase[j])) { i++; j++ }

  return j === lcase.length ? i : 0
}

module.exports = {
  VALID,
  START,
  END,
  DATA,

  compose,
  optional,

  ignoreEmptyLines,
  ignoreSpace,
  packet,
  parseLine,
  parseLiteral,
  parseWord,
  recognizeNonSpace,
  recognizeWord
}

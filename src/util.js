
const FOUND = 0
const START = 1
const END = 2
const RESULT = 3

const optional = (parse) => {
  return (input, offset) => {
    const parseResult = parse(input, offset)

    if (parseResult[RESULT]) {
      return parseResult
    } else {
      return [true, offset, offset, {}]
    }
  }
}

function acceptLiteral (input, offset, keyword) {
  let i = offset
  let keywordLength = keyword.length / 2
  let j = 0
  let k = keywordLength

  while ((input[i] === keyword[j]) || (input[i] === keyword[k])) { i++; j++; k++ }

  return i === offset + keywordLength ? i : 0
}

const compose = function (...chain) {
  return (input, offset) => {
    let composedResult = {}
    let currentOffset = offset
    let firstParseResult = null
    let i = 0
    let lastParseResult = [true, 0, 0, {}]

    for (; lastParseResult[FOUND] && i < chain.length; i++) {
      const parse = chain[i]
      lastParseResult = parse(input, currentOffset)
      Object.assign(composedResult, lastParseResult[RESULT])
      currentOffset = lastParseResult[END]
      firstParseResult = firstParseResult || lastParseResult
    }

    return [
      i >= chain.length,
      firstParseResult[START],
      lastParseResult[END],
      composedResult
    ]
  }
}

function acceptNonSpace (input, offset) {
  let start = offset

  let end = ignore(input, start, /[^\s\r\n]/)

  return end > start ? end : 0
}

function ignore (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) { i++ }

  return i
}

function ignoreEmptyLines (input, offset) {
  return ignore(input, offset, /\s+/)
}

function ignoreSpaces (input, offset) {
  return ignore(input, offset, /[ \t]/)
}

function parseLine (input, offset) {
  let start = offset
  let end = acceptNonSpace(input, start)

  if (end) {
    let firstWordEnd = end
    let left = start
    let right = end

    while (end) {
      start = ignoreSpaces(input, end)
      end = acceptNonSpace(input, start)

      if (end) { right = end }
    }

    return [true, left, right, firstWordEnd]
  }

  return [false]
}

function parseKeyword (keyword, result) {
  return (input, offset) => {
    let start = offset

    let end = acceptLiteral(input, start, keyword)

    if (end) { return [true, start, end, result] }

    return [false]
  }
}

module.exports = {
  FOUND,
  START,
  END,
  RESULT,

  compose,
  optional,

  acceptLiteral,
  acceptNonSpace,
  ignoreEmptyLines,
  parseKeyword,
  parseLine
}

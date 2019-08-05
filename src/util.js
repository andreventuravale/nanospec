
const VALID = 0
const START = 1
const END = 2
const DATA = 3

function ignoreComment (input, offset) {
  const i = recognizeLiteral(input, offset, '#')

  if (i > offset) {
    return ignoreLine(input, i)
  }

  return offset
}

function ignoreEmptyLines (input, offset) {
  const i = ignoreRegex(input, offset, /\s+/)

  const j = ignoreComment(input, i)

  return ignoreRegex(input, j, /\s+/)
}

function ignoreLine (input, offset) {
  const i = ignoreRegex(input, offset, /[^\r\n]/)

  const j = ignoreRegex(input, i, /[\r\n]/)

  return j
}

function ignoreEmptyLinesBefore (parse) {
  return (input, offset) => {
    const i = ignoreEmptyLines(input, offset)

    return parse(input, i)
  }
}

function spaces (input, offset) {
  const i = recognizeSpace(input, offset)

  return packet(i > offset, offset, i)
}

function newLines (input, offset) {
  const i = recognizeNewLine(input, offset)

  return packet(i > offset, offset, i)
}

function passthrough (parse) {
  return (input, offset) => parse(input, offset)
}

function optional (parse) {
  return (input, offset) => {
    const parseResult = parse(input, offset)

    if (parseResult[VALID]) {
      return parseResult
    }
    return packet(true, offset, offset, {})
  }
}

function reduce (parse, reduce, initial, select = results => results[DATA]) {
  return (input, offset) => {
    const results = parse(input, offset)

    inspect([1231231, results, 4444], [333333, select(results)])

    const data = select(results).reduce(reduce, initial)

    // inspect(packet(true, results[START], results[END], data))

    return packet(true, results[START], results[END], data)
  }
}

function many (parseItem, parseSeparator) {
  return (input, offset) => {
    let parseResult = parseItem(input, offset)
    let parseSeparatorResult

    if (parseResult[VALID]) {
      const first = parseResult
      let last = first
      const data = []

      do {
        last = parseResult

        data.push(last[DATA])

        parseSeparatorResult = parseSeparator(input, last[END])

        if (parseSeparatorResult[VALID]) {
          parseResult = parseItem(input, parseSeparatorResult[END])
        }
      } while (parseSeparatorResult[VALID] && parseResult[VALID])

      return packet(true, first[START], last[END], data)
    }

    return packet(false)
  }
}

function standard (parse) {
  return ignoreEmptyLinesBefore(parse)
}

function compose (setup) {
  const parseChain = []

  const emit =
    (parse) => {
      parseChain.push(parse)
    }

  setup({
    emit,
    ignoreEmptyLinesBefore,
    many,
    reduce,
    optional,
    passthrough,
    spaces,
    newLines,
    standard
  })

  return (input, offset) => {
    let i = 0
    const data = {}
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

function parseLine (input, offset) {
  let start = ignoreEmptyLines(input, offset)
  let end = recognizeNonSpace(input, start)

  if (end) {
    const firstTokenEnd = end
    const from = start
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
    const start = offset

    const end = recognizeLiteral(input, start, literal)

    if (end) { return packet(true, start, end, result) }

    return packet(false)
  }
}

function parseWord (lcase, ucase, result) {
  return (input, offset) => {
    const start = offset

    const end = recognizeWord(input, start, lcase, ucase)

    if (end) {
      return packet(true, start, end, result)
    }

    return packet(false)
  }
}

function parseNonSpace (input, offset) {
  const start = offset

  const end = recognizeNonSpace(input, start)

  if (end) {
    const fullText = input.slice(start, end)

    return packet(true, start, end, { fullText })
  }

  return packet(false)
}

function recognizeLiteral (input, offset, literal) {
  let i = offset
  let j = 0

  while (input[i] === literal[j]) { i++; j++ }

  return j === literal.length ? i : 0
}

function recognizeNonSpace (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[^\s]/)

  return end > start ? end : 0
}

function recognizeSpace (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[ \t]/)

  return end > start ? end : 0
}

function recognizeNewLine (input, offset) {
  const start = offset

  const end = ignoreRegex(input, start, /[\r\n]/)

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

  ignoreComment,
  ignoreEmptyLines,
  packet,
  parseLine,
  parseLiteral,
  parseWord,
  recognizeNonSpace,
  recognizeSpace,
  recognizeWord,
  parseNonSpace
}
